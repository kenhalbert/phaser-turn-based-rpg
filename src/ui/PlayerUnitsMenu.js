import Phaser from 'phaser';
import BattleModeMenu from './BattleModeMenu';

class PlayerUnitsMenu extends BattleModeMenu {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.playerUnits = [];
  }

  initialize(playerUnits) {
    super.initialize();

    this.playerUnits = playerUnits;
  }
}

export default PlayerUnitsMenu;