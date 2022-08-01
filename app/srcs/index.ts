import './style.css'
import Phaser from 'phaser';

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'main', active: true })
  }

  preload(): void {
  }

  create(): void {
  }

  update(time: number, delta: number): void {
  }

  destroy(): void {
  }
}

const game: Phaser.Game = new Phaser.Game({
  width: 1024,
  height: 768,
  scene: [ MainScene ],
})