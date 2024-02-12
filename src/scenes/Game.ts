import { Scene } from "phaser";

export class Game extends Scene {
  background: Phaser.GameObjects.Image;

  constructor() {
    super("Game");
  }

  preload() {
    this.load.setPrefix("assets/");
    this.load.image("sky", "sky.png");
    this.load.image("platform", "platform.png");
    this.load.image("star", "star.png");
    this.load.image("bomb", "bomb.png");
    this.load.spritesheet("player", "player.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }
}
