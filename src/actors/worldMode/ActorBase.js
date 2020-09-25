import Phaser from 'phaser';

class ActorBase extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y, spriteKey, type) {
    super(scene, x, y, spriteKey);

    this.scene = scene;
    this.type = type;
  }

  initialize() {
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.body.setCollideWorldBounds(true);
  }
};

export default ActorBase;