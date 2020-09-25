import Phaser from 'phaser';
import UnitBase from './UnitBase';

class PlayerUnit extends UnitBase {
  constructor(scene, x, y, frame, hp, damage, unitClass) {
    super(scene, x, y, 'player', frame, 'PlayerUnit', hp, damage);

    this.unitClass = unitClass;
  }

  initialize() {
    super.initialize();

    this.flipX = true;

    this.setScale(2);
  }

  getUnitClass() {
    return this.unitClass;
  }
}

export default PlayerUnit;