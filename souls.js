class Souls {
    constructor(game, x, y, spritesheet) {
        //This animation will only run at a certain point in the other animation. 
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqesSouls-Sheet.png"), 0, 0, 66, 42, 11, 0.1, 0, false, true);
         
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 700, 450);
    };
}