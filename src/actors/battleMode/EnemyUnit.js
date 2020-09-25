import Phaser from 'phaser';
import UnitBase from './UnitBase';

class EnemyUnit extends UnitBase {
  constructor(scene, x, y, hp, damage, name) {
    super(scene, x, y, 'dragonblue', null, 'EnemyUnit', hp, damage);

    this.name = name;
  }
}

export default EnemyUnit;