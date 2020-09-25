import Phaser from 'phaser';

class BattleModeMenuItem extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, boundObject) {
    super(
      scene, 
      x, 
      y, 
      text,
      { 
        color: '#ffffff', 
        align: 'left', 
        fontSize: 15
      }
    );

    this.scene = scene;
    this.boundObject = boundObject;
  }

  initialize() {
    this.scene.add.existing(this);
  }

  select() {
    if (!this.active) throw Error(`selected menu item is not active`);

    this.setColor('#f8ff38');
  }

  deselect() {
    this.setColor('#ffffff');
  }
}

export default BattleModeMenuItem;