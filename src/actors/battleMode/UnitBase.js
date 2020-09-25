import Phaser from 'phaser';

class UnitBase extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame, type, hp, damage) {
    super(scene, x, y, texture, frame);

    this.scene = scene;
    this.type = type;
    this.hp = hp;
    this.maxHp = hp;
    this.damage = damage;
    this.isAlive = true;
    this.onDeathCallback = null;
  }

  initialize() {
    this.scene.add.existing(this);
  }

  attack(target) {
    target.takeDamage(this.damage);

    return this.damage;
  }

  onDeath(callback) {
    this.onDeathCallback = callback;
  }

  takeDamage(damage) {
    this.hp -= damage;
    
    if (this.hp <= 0) {  
      this.hp = 0;
      this.isAlive = false;
      this.visible = false; 

      if (this.onDeathCallback) this.onDeathCallback();
    }

    return damage;
  }
}

export default UnitBase;