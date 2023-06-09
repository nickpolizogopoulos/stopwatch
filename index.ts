
function StopWatch( this:any ) {
    let startTime: Date | null = null;
    let stopTime: Date | null = null;
    let running: boolean = false
    let duration: number = 0;

    this.start = () => {
        if (running) throw new Error ('The stopwatch is running.');
        running = true;
        startTime = new Date();
    }
    this.stop = () => {
        if (!running) throw new Error ('The stopwatch is not running.');
        running = false;
        stopTime = new Date();
        const seconds:number = (stopTime.getTime() - (startTime as Date).getTime()) / 1000;
        duration += seconds;
    }
    this.reset = () => {
        startTime = null;
        stopTime = null;
        duration = 0;
        running = false;
    }
    Object.defineProperty(this, 'duration', {
      get: () => { return duration; } });
}

const s = new (StopWatch as any)();
