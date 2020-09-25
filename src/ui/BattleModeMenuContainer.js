import Phaser from 'phaser';
import ActionsMenu from './ActionsMenu';
import EnemiesMenu from './EnemiesMenu';
import PlayerUnitsMenu from './PlayerUnitsMenu';

class BattleModeMenuContainer extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
    this.playerUnitsMenu = null;
    this.actionsMenu = null;
    this.enemiesMenu = null;
    this.currentMenu = null;
  }

  initialize() {
    this.playerUnitsMenu = new PlayerUnitsMenu(this.scene, 195, 0);
    this.actionsMenu = new ActionsMenu(this.scene, 100, 0);
    this.enemiesMenu =  new EnemiesMenu(this.scene, 8, 0);

    this.playerUnitsMenu.initialize();
    this.actionsMenu.initialize();
    this.enemiesMenu.initialize();

    this.currentMenu = this.playerUnitsMenu;

    this.add(this.playerUnitsMenu);
    this.add(this.actionsMenu);
    this.add(this.enemiesMenu);

    this.scene.add.existing(this);

    this.scene.input.keyboard.on('keydown', this.onKeyInput, this);
  }

  activateCurrentMenu() {
    this.currentMenu.activate();
  }

  deactivateAll() {
    this.playerUnitsMenu.deselect();
    this.actionsMenu.deselect();
    this.enemiesMenu.deselect();
    
    this.currentMenu = null;
  }

  onPlayerTurnBegin(unitIndex) {
    this.playerUnitsMenu.selectItem(unitIndex);
    this.actionsMenu.selectItem(0);

    this.currentMenu = this.actionsMenu;

    this.activateCurrentMenu();
  }

  onPlayerActionSelected() {
    this.currentMenu = this.enemiesMenu;

    this.enemiesMenu.activate();
  }

  onKeyInput(event) {
    if (this.currentMenu) {
      if (event.code === "ArrowUp") {
        this.currentMenu.selectNext();
      } else if (event.code === "ArrowDown") {
        this.currentMenu.selectPrevious();
      } else if (event.code === "ArrowRight" || event.code === "Shift") {

      } else if (event.code === "Space" || event.code === "Enter" || event.code === "ArrowLeft") {
        this.currentMenu.confirm();
      } 
    }
  }

  getCurrentMenu() {
    return this.currentMenu;
  }

  getPlayerUnitsMenu() {
    return this.playerUnitsMenu;
  }

  getActionsMenu() {
    return this.actionsMenu;
  }

  getEnemiesMenu() {
    return this.enemiesMenu;
  }
}

export default BattleModeMenuContainer;