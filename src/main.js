import Phaser from 'phaser';
import config from './config';

class Game extends Phaser.Game {
  constructor () {
    super(config)
  }
}

window.game = new Game()
