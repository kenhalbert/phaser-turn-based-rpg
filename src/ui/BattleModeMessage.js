import Phaser from 'phaser';

class BattleModeMessage extends Phaser.GameObjects.Container {
  constructor (scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
    this.text = null;
    this.hideTimer = null;
  }

  initialize() {
    const graphics = this.scene.add.graphics();
    this.add(graphics);

    graphics.lineStyle(1, 0xffffff, 0.8);
    graphics.fillStyle(0x031f4c, 0.3);        
    graphics.strokeRect(-90, -15, 180, 30);
    graphics.fillRect(-90, -15, 180, 30);

    this.text = new Phaser.GameObjects.Text(
      this.scene, 
      0, 
      0, 
      "", 
      { 
        color: '#ffffff', 
        align: 'center', 
        fontSize: 13, 
        wordWrap: { 
          width: 160, 
          useAdvancedWrap: true 
        }
      }
    );
    this.add(this.text);

    this.text.setOrigin(0.5);

    this.scene.events.on("message", this.showMessage, this);

    this.visible = false;

    this.scene.add.existing(this);
  }

  showMessage(text) {
    this.text.setText(text);
    this.visible = true;

    if (this.hideTimer)
      this.hideTimer.remove(false)

    this.hideTimer = this.scene.time.addEvent(
      { 
        delay: 2000, 
        callback: this.hideMessage, 
        callbackScope: this 
      }
    );
  }

  hideMessage() {
    this.hideTimer.remove(false);
    this.hideTimer = null;
    this.visible = false;
  }
}

export default BattleModeMessage;