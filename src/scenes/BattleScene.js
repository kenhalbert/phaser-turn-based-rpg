import Phaser from 'phaser';
import PlayerUnit from '../actors/battleMode/PlayerUnit';
import EnemyUnit from '../actors/battleMode/EnemyUnit';

class BattleScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BattleScene' });
  }

  /* Public interface */

  getPlayerUnits() {
    return this.playerUnits;
  }

  getEnemyUnits() {
    return this.enemyUnits;
  }

  handlePlayerAction(action, targetIndex) {
    const units = this.getAllUnits();

    switch (action) {
      case 'attack' :
        const damageDone = units[this.turnIndex].attack(this.enemyUnits[targetIndex]);

        this.events.emit(
          'unitActionTaken', 
          { 
            action: 'attack',
            sourceUnitName: units[this.turnIndex].unitClass,
            targetUnitName: this.enemyUnits[targetIndex].name,
            damage: damageDone
          }
        );     

        break;
      default:
        throw Error(`unsupported player action ${action}`);
    }

    this.turnIndex++;

    this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
  }

  onInterfaceCreated() {
    this.nextTurn();
  }

  /* Phaser hooks */

  preload() {

  }

  create() {
    // the scene constructor is only called once during game execution (even if the scene is shut down and started again).
      // so, any properties that contain scene state need to be initialized in the create method.
    this.initProperties();

    this.cameras.main.setBackgroundColor('rgba(0, 200, 0, 0.5)');

    this.playerUnits = [
      this.createPlayerUnit(250, 50, 'Warrior'),
      this.createPlayerUnit(250, 100, 'Mage')
    ];

    this.enemyUnits = [
      this.createEnemyUnit(50, 50),
      this.createEnemyUnit(50, 100)
    ];

    // run the interface scene at the same time as this one
    this.scene.launch('BattleInterfaceScene', this);
  }

  update() {

  }

  /* Private methods */

  initProperties() {
    this.playerUnits = null;
    this.enemyUnits = null;

    this.uiScene = null;

    this.turnIndex = 0;
  }

  getAllUnits () {
    return this.playerUnits.concat(this.enemyUnits);
  }

  createEnemyUnit(x, y) {
    const unit = new EnemyUnit(this, x, y, 50, 3, 'Dragon');

    unit.initialize();

    return unit;
  }

  createPlayerUnit(x, y, unitClass) {
    const hp = unitClass === 'Warrior'
      ? 100
      : 80;

    const damage = unitClass === 'Warrior'
      ? 20
      : 8;

    const frame = unitClass === 'Warrior'
      ? 1
      : 4;

    const unit = new PlayerUnit(this, x, y, frame, hp, damage, unitClass);

    unit.initialize();

    return unit;
  }

  nextTurn() {
    const isPlayerVictorious = this.enemyUnits.every((u) => !u.isAlive);
    const isPlayerDefeated = this.playerUnits.every((u) => !u.isAlive);

    if (isPlayerVictorious || isPlayerDefeated) {
      this.events.emit(
        'battleEnding', 
        {
          isPlayerDefeated,
          isPlayerVictorious
        }
      );

      this.time.addEvent({delay: 3000, callback: this.exitBattle, callbackScope: this});

      return;
    }

    const allUnits = this.getAllUnits();

    // if there are no more units, we start again from the first one
    if (this.turnIndex >= allUnits.length) {
      this.turnIndex = 0;
    }

    const unitForTurn = allUnits[this.turnIndex];

    if (unitForTurn.isAlive) {
      if (unitForTurn instanceof PlayerUnit) {       
        this.events.emit('playerTurnBegin', this.turnIndex);
      } else if (unitForTurn instanceof EnemyUnit) {
        // attack a random player unit
        var randomIndex = Math.floor(Math.random() * this.playerUnits.length);
        const damageDone = unitForTurn.attack(this.playerUnits[randomIndex]);
  
        this.events.emit(
          'unitActionTaken', 
          { 
            action: 'attack',
            sourceUnitName: unitForTurn.name,
            targetUnitName: this.playerUnits[randomIndex].unitClass,
            damage: damageDone
          }
        );
        
        this.turnIndex++;
        
        this.time.addEvent({ delay: 3000, callback: this.nextTurn, callbackScope: this });
      } else {
        throw Error(`unsupported unit type`);
      }
    } else {
      this.turnIndex++;
      this.nextTurn();
    }
  }

  exitBattle() {
    this.scene.stop();
    this.scene.stop('BattleInterfaceScene');
    this.scene.wake('WorldScene');
  }
}

export default BattleScene;