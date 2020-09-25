import Phaser from 'phaser';

class EnemySpawns {
  constructor(scene, numberOfSpawns) {
    this.scene = scene;
    this.spawns = null;
    this.numberOfSpawns = numberOfSpawns;
    this.spawnWidth = 20;
    this.spawnHeight = 20;
  }

  initialize(player) {
    this.spawns = this.scene.physics.add.group({ classType: Phaser.GameObjects.Zone });

    for (let i = 0; i < this.numberOfSpawns; i++) {
      const x = Phaser.Math.RND.between(0, this.scene.physics.world.bounds.width);
      const y = Phaser.Math.RND.between(0, this.scene.physics.world.bounds.height);

      this.spawns.create(x, y, this.spawnWidth, this.spawnHeight);            
    }        

    this.scene.physics.add.overlap(player, this.spawns, this.onMeetEnemy, null, this);
  }

  onMeetEnemy(player, zone) {
    // move spawn zone somewhere else
    zone.x = Phaser.Math.RND.between(0, this.scene.physics.world.bounds.width);
    zone.y = Phaser.Math.RND.between(0, this.scene.physics.world.bounds.height);

    if (this.scene.hasBattleBeenTriggered) {
      return;
    }

    // transition to next scene
    this.scene.hasBattleBeenTriggered = true;
    this.scene.cameras.main.fade(300);
    this.scene.time.addEvent(
      { 
        delay: 300, 
        callback: () => {
          this.scene.scene.sleep();
          this.scene.scene.launch('BattleScene');
        }
      }
    );
  }
}

export default EnemySpawns;