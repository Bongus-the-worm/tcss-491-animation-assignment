class Msqe {
    constructor(game, x, y, spritesheet) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 0, 49, 50, 5, 0.3, 0, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 50, 50);
    };
}