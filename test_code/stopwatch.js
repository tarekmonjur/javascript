class StopWatch{

    constructor(){
        this.startTime;
        this.stopTime;
        this.running;
        this.durations;
    }

    start(){
        if(this.running){
            throw new Error('Stopwatch has already running.');
        }
        this.running = true;
        this.startTime = new Date();
    }

    stop(){
        if(!this.running){
            throw new Error('Stopwatch has already stop.');
        }
        this.running = false;
        this.stopTime = new Date();
        const second = (this.stopTime.getTime() - this.startTime.getTime())/1000;
        this.durations += second;
    }

    reset(){
        this.startTime = null;
        this.stopTime = null;
        this.running = false;
        this.durations = 0;
    }

    get duration(){
        if(this.running) {
            this.stopTime = new Date();
        }

        let second = 0;

        if((this.startTime instanceof Date) && (this.stopTime instanceof Date)) {
            console.log(`sss ${this.stopTime}`);
            second = (this.stopTime.getTime() - this.startTime.getTime()) / 1000;
        }
        return this.durations += second;
    }

    set duration(value){
        if(typeof value != "number"){
            throw new Error('value must be number.');
        }
        this.durations = value;
    }

}

const sw = new StopWatch();
