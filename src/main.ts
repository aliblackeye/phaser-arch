import { Game } from "./scenes/Game";
import { Game as PhaserGame, Types } from "phaser";

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Types.Core.GameConfig = {
  // First tries to use WebGL, if doesn't support it, it uses Canvas
  type: Phaser.AUTO,
  /* 
  width: window.innerWidth, // Default 1024
  height: window.innerHeight, // Default 768 
  */
  width: 800, // Default 1024
  height: 600, // Default 768
  parent: "game-container",
  backgroundColor: "#028af8",
  zoom: 1, // Default 1
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  version: "1.0.0",
  title: "Game Architect",
  url: "https://alikaragoz.site/",
  scene: [Game],
};

export default new PhaserGame(config);
