import Phaser from 'phaser';
import ActorBase from './ActorBase';

class Player extends ActorBase {
  constructor (scene, x, y, spriteKey) {
    super(scene, x, y, spriteKey, 'Player');

    this.movementSpeed = 80;
  }

  moveLeft() {
    this.body.setVelocityY(0);
    this.body.setVelocityX(-this.movementSpeed);
    this.flipX = true;
    this.anims.play('left', true);
  }

  moveRight() {
    this.body.setVelocityY(0);
    this.body.setVelocityX(this.movementSpeed);
    this.flipX = false;
    this.anims.play('right', true);
  }

  moveUp() {
    this.body.setVelocityX(0);
    this.body.setVelocityY(-this.movementSpeed);
    this.anims.play('up', true);
  }

  moveDown() {
    this.body.setVelocityX(0);
    this.body.setVelocityY(this.movementSpeed);
    this.anims.play('down', true);
  }

  idle() {
    this.body.setVelocityY(0);
    this.body.setVelocityX(0);
    this.anims.stop();
  }
}

export default Player;