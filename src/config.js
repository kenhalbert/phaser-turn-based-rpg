import Phaser from 'phaser';
import scenes from './scenes';

export default {
  type: Phaser.AUTO,
  pixelArt: true,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.DOM.CENTER_BOTH,
    width: 320,
    height: 240,
    parent: 'content'
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  localStorageName: 'phaseres6webpack',
  scene: scenes
};