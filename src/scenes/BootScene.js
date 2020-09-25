import Phaser from 'phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    // map tiles
    this.load.image('tiles', 'assets/map/extruded-tileset.png');
        
    // map JSON
    this.load.tilemapTiledJSON('map', 'assets/map/map.json');
    
    this.load.spritesheet('player', 'assets/RPG_assets.png', { frameWidth: 16, frameHeight: 16 });
    this.load.image('dragonblue', 'assets/dragonblue.png');
    this.load.image('dragonorrange', 'assets/dragonorrange.png');
  }

  create() {
    this.scene.start('WorldScene');
  }

  update() {

  }
}

export default BootScene;