const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Spritesheets/MsqeBody-Sheet.png");
ASSET_MANAGER.queueDownload("./Spritesheets/MsqesSouls-Sheet.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");

	gameEngine.addEntity(new Msqe(gameEngine));
	gameEngine.addEntity(new Souls(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
