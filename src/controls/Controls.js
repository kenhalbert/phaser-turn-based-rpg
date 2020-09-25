import Phaser from 'phaser';

class Controls {
  constructor (scene) {
    this.keyW = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }
  
  isMoveLeftActive() {
    return this.keyA.isDown;
  }

  isMoveRightActive() {
    return this.keyD.isDown;
  }

  isMoveUpActive() {
    return this.keyW.isDown;
  }
  
  isMoveDownActive() {
    return this.keyS.isDown;
  }

  reset() {
    this.keyA.isDown = false;
    this.keyD.isDown = false;
    this.keyW.isDown = false;
    this.keyS.isDown = false;
  }
}

export default Controls;