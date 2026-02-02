// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.bubble = true;
        this.isopen = false;
        this.isclose = false;
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            requestAnimFrame(gameLoop, this.ctx.canvas);
        };
        gameLoop();
    };

    startInput() {

        var that = this
        this.ctx.canvas.addEventListener("keydown", function (e) {
            switch (e.code) {
                case "KeyB": 
                    that.isclose = false;
                    that.isopen = false;
                    that.bubble = true;
                    console.log("B pressed!!!!")
                    break;
                case "KeyO": 
                    that.isclose = false;
                    that.isopen = true;
                    that.bubble = false;
                    console.log("O pressed!!!!")
                    break;
                case "KeyC": 
                    that.isclose = true;
                    that.isopen = false;
                    that.bubble = false;
                    console.log("C pressed!!!!")
                    break;
            }
        }, false);

        this.ctx.canvas.addEventListener("keyup", function (e) {
            switch (e.code) {
                case "KeyB": 
                    break;
                case "keyO": 
                    break;
                case "KeyC": 
                    break;
            }
        }, false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    setState(num) {
        if (num == 0) { 
            that.isclose = false;
            that.isopen = false;
            that.bubble = true;
        } else if (num == 1){
            that.isclose = false;
            that.isopen = true;
            that.bubble = false;
        } else {
            that.isclose = true;
            that.isopen = false;
            that.bubble = false;
        }
    }

    getState() {
        if (this.isbubble) {
            return 0;
        };
        if (this.isopen) {
            return 1;
        };
        if (this.isclose) {
            return 2;
        }
        return 0;
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
    };

    update() {
        let entitiesCount = this.entities.length;

        for (let i = 0; i < entitiesCount; i++) {
            let entity = this.entities[i];

            if (!entity.removeFromWorld) {
                entity.update();
            }
        }

        for (let i = this.entities.length - 1; i >= 0; --i) {
            if (this.entities[i].removeFromWorld) {
                this.entities.splice(i, 1);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};

// KV Le was here :)