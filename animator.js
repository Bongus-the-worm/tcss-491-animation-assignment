class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop) {
        Object.assign(this, { spritesheet, xStart, yStart, height, width, frameCount, frameDuration, framePadding, reverse, loop });

        this.elapsedTime = 0;
        this.totalTime = this.frameCount * this.frameDuration;

    };

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.loop && this.elapsedTime > this.totalTime){
            this.elapsedTime -= this.totalTime;
        } 
        const frame = this.currentFrame();
        ctx.drawImage(this.spritesheet, 
            this.xStart + this.width * frame, this.yStart, //Defined in constructor
            this.width, this.height, //defined in consturctor
            x, y, //destination x and y; given from drawframe call.
            this.width * 5, this.height * 5 //Scale doesnt change at all; same as above
        );
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
};
