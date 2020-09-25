import Phaser from 'phaser';
import BattleModeMenu from './BattleModeMenu';

class EnemiesMenu extends BattleModeMenu {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
  }

  onMenuItemAdded(menuItem, enemyUnit) {
    enemyUnit.onDeath(
      () => {
        menuItem.visible = false;
        menuItem.active = false;
      }
    );
  }

  confirm() {
    super.confirm();

    this.scene.events.emit('enemySelected', this.currentMenuItemIndex);
  }
}

export default EnemiesMenu;