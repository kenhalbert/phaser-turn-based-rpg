import Phaser from 'phaser';
import Player from '../actors/worldMode/Player';
import Controls from '../controls/Controls';
import EnemySpawns from '../environment/EnemySpawns';

class WorldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WorldScene' });

    this.map = null;
    this.tiles = null;
    this.grass = null;
    this.obstacles = null;

    this.enemySpawns = null;
    this.player = null;
    this.controls = null;

    this.hasBattleBeenTriggered = false;
  }

  preload() {

  }

  create() {
    this.createAnimations();

    this.map = this.make.tilemap({ key: 'map' });
    this.tiles = this.map.addTilesetImage('spritesheet', 'tiles');
    this.grass = this.map.createStaticLayer('Grass', this.tiles, 0, 0);
    this.obstacles = this.map.createStaticLayer('Obstacles', this.tiles, 0, 0);

    // enable collision for all obstacles
    this.obstacles.setCollisionByExclusion([-1]);

    this.player = new Player(this, 50, 100, 'player');
    this.player.initialize();
    this.controls = new Controls(this);

    this.enemySpawns = new EnemySpawns(this, 20);
    this.enemySpawns.initialize(this.player);
    
    // colliders
    this.physics.add.collider(this.player, this.obstacles);

    // set world bounds equal to map dimensions
    this.physics.world.bounds.width = this.map.widthInPixels;
    this.physics.world.bounds.height = this.map.heightInPixels;

    this.cameras.main.setBounds(
      0, 
      0, 
      this.map.widthInPixels, 
      this.map.heightInPixels
    );
    this.cameras.main.startFollow(this.player, true);
    this.cameras.main.roundPixels = true;

    this.sys.events.on(
      'wake',
      () => {
        this.cameras.main.resetFX();
        this.hasBattleBeenTriggered = false;

        // necessary because control state gets stuck between scene switches
        this.controls.reset();
      }
    );
  }

  update() {
    if (this.controls.isMoveDownActive()) {
      this.player.moveDown();
    } else if (this.controls.isMoveUpActive()) {
      this.player.moveUp();
    } else if (this.controls.isMoveLeftActive()) {
      this.player.moveLeft();
    } else if (this.controls.isMoveRightActive()) {
      this.player.moveRight();
    } else {
      this.player.idle();
    }
  }

  createAnimations() {
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13]}),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('player', { frames: [1, 7, 1, 13] }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('player', { frames: [2, 8, 2, 14]}),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('player', { frames: [ 0, 6, 0, 12 ] }),
      frameRate: 10,
      repeat: -1
    });
  }
}

export default WorldScene;