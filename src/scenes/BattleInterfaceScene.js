import Phaser from 'phaser';
import BattleModeMenuContainer from '../ui/BattleModeMenuContainer';
import BattleModeMessage from '../ui/BattleModeMessage';

class BattleInterfaceScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BattleInterfaceScene' });

    this.ownerScene = null;
  }

  preload() {

  }

  init(ownerScene) {
    // this pattern allows UI scenes to be decoupled from the scenes that use them
    this.ownerScene = ownerScene;
  }

  create() {
    // the scene constructor is only called once during game execution (even if the scene is shut down and started again).
      // so, any properties that contain scene state need to be initialized in the create method.
    this.initProperties();

    this.drawMenuBackgrounds();

    this.menus = new BattleModeMenuContainer(this, 0, 153);
    this.menus.initialize();

    this.remapPlayerUnits(
      this.ownerScene.getPlayerUnits()
    );
    this.remapEnemyUnits(
      this.ownerScene.getEnemyUnits()
    );

    this.menus.activateCurrentMenu();

    this.ownerScene.events.on(
      'battleEnding',
      (outcome) => {
        const {
          isPlayerDefeated,
          isPlayerVictorious
        } = outcome;

        const message = isPlayerDefeated
          ? 'Defeat!'
          : 'Victory!';

        this.events.emit('message', message);
      }
    )

    this.ownerScene.events.on(
      'playerTurnBegin', 
      this.menus.onPlayerTurnBegin, 
      this.menus
    );

    this.ownerScene.events.on(
      'unitActionTaken',
      (data) => {
        const { 
          action,
          sourceUnitName, 
          targetUnitName, 
          damage
        } = data;

        let messageText = null;
        switch (action) {
          case "attack" :
            messageText = `${sourceUnitName} attacks ${targetUnitName} for ${damage} damage!`;
            break;
          default:
            throw Error(`unsupported action ${action}`);
        }

        this.events.emit(
          'message',
          messageText
        );
      }
    )

    this.events.on(
      'playerActionSelected', 
      this.menus.onPlayerActionSelected, 
      this.menus
    );

    this.events.on(
      'enemySelected',
      (enemyUnitIndex) => {
        this.menus.deactivateAll();

        this.ownerScene.handlePlayerAction('attack', enemyUnitIndex);
      }
    );

    this.message = new BattleModeMessage(this, 160, 30);
    this.message.initialize();

    setTimeout(() => {
      this.ownerScene.onInterfaceCreated();
    }, 0);

    this.events.on('shutdown', () => {  
      /* 
        There is a lesson in this mess...  and it is:

          Manage event subscription and event unsubscription in one place.

        Do not subscribe objects directly to scene management events.  Instead, pass in callbacks
        as constructor parameters.  These callbacks will be created in the scene, and it
        will be clear what events need to be cleaned up before the scene is shut down.
      */
      this.ownerScene.events.off('playerTurnBegin');
      this.ownerScene.events.off('unitActionTaken');
      this.ownerScene.events.off('battleEnding');

      this.events.off('playerActionSelected');
      this.events.off('enemySelected');
      this.events.off('message');

      this.events.off('shutdown');
    });
  }

  update() {
    
  }

  initProperties() {
    this.menus = null;
    this.menuBackgrounds = null;
    this.message = null;
  }

  remapPlayerUnits(units) {
    this
      .menus
      .getPlayerUnitsMenu()
      .remap(
        units.map(
          (u) => {
            return {
              text: u.getUnitClass(),
              boundObject: u
            }
          }
        )
      );
  }

  remapEnemyUnits(units) {
    this
      .menus
      .getEnemiesMenu()
      .remap(
        units.map(
          (u)=> {
            return {
              text: u.name,
              boundObject: u
            }
          }
        )
      );
  }

  drawMenuBackgrounds() {
    this.menuBackgrounds = this.add.graphics();
    this.menuBackgrounds.lineStyle(1, 0xffffff);
    this.menuBackgrounds.fillStyle(0x031f4c, 1);        
    this.menuBackgrounds.strokeRect(2, 150, 90, 100);
    this.menuBackgrounds.fillRect(2, 150, 90, 100);
    this.menuBackgrounds.strokeRect(95, 150, 90, 100);
    this.menuBackgrounds.fillRect(95, 150, 90, 100);
    this.menuBackgrounds.strokeRect(188, 150, 130, 100);
    this.menuBackgrounds.fillRect(188, 150, 130, 100);
  }
}

export default BattleInterfaceScene;