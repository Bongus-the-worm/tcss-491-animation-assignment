class Msqe {
    constructor(game, x, y, spritesheet) {
        this.game = game;
        // this.bubbleAnimator = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 0, 49, 50, 5, 0.1, 0, false, true);
        // this.openAnimator = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 0, 49, 50, 11, 0.1, 0, false, false);
        // this.closeAnimator = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 0, 49, 50, 7, 0.1, 0, false, false);



        //State variable
        this.state = 0; //0 = bubbling, 1 = opening, 2 = closing

        this.animations = [];
        this.loadAnimations();
    };

    loadAnimations() {
        for (var i = 0; i < 3; i++){
            this.animations.push([]);
        }

        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 0, 49, 50, 5, 0.1, 0, false, true);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 51, 49, 50, 11, 0.1, 0, false, true);
        this.animations[2] = new Animator(ASSET_MANAGER.getAsset("./Spritesheets/MsqeBody-Sheet.png"), 0, 102, 49, 50, 7, 0.1, 0, false, true);


    }

    update() {
        this.state = this.game.getState();
        console.log(this.game.getState());
        // if (this.state == 1 && this.animations[1].currentFrame == 10){
        //     this.state = 0;
        //     gameEngine.setState(0);
        // }
        // if (this.state == 2 && this.animations[2].currentFrame == 6){
        //     this.state = 0;
        //     gameEngine.setState(0);
        // }
    };

    draw(ctx) {
        this.animations[this.state].drawFrame(this.game.clockTick, ctx, 50, 50);
    };
}