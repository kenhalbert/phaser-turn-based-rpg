import Phaser from 'phaser';
import BattleModeMenu from './BattleModeMenu';

class ActionsMenu extends BattleModeMenu {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
  }

  initialize() {
    super.initialize();

    this.addMenuItem('Attack');
  }

  confirm() {
    super.confirm();

    this.scene.events.emit('playerActionSelected');
  }
}

export default ActionsMenu;