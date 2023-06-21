class Common {
    getBollsByOver (overs) {
        overs = (String(overs)).split('.');
        return +(overs[0] * 6) + +(overs[1] || 0);
    }

    getOversByBolls (bolls) {
        return `${Math.floor(bolls / 6)}.${(bolls % 6)}`;
    }
}

class Player extends Common{
    constructor(name, overs, outReason) {
        super();
        this.name = name;
        this.overs = overs;
        this.score = 0;
        this.isOut = false;
        this.playedBolls = 0;
        this.outReason = outReason;
    }

    updatePlayerScore (score) {
        this.score = this.score + score;
        this.updateBolls();
        this.setOut();
    }

    updateBolls () {
        this.playedBolls++;
    }

    setOut() {
        const overBolls = this.getBollsByOver(this.overs);
        if (overBolls == this.playedBolls) {
            this.isOut = true;
        }
    }
}


class Game extends Common{
    constructor (overs) {
        super();
        this.overs = overs;
        this.players = [];
        this.totalScore = 0;
        this.currentPlayer = null;
        this.totalBolls = 0;
    }

    addPlayer (player) 
    {
        this.players.push(player);
    }

    getPlayer ()
    {
        return this.players.find(p => !p.isOut);
    }

    displayScore() {
        const currentPlayer = this.currentPlayer;
        console.log('Total Score: ', this.totalScore);
        console.log('Player Name: ', currentPlayer.name);
        console.log('Player Score: ', currentPlayer.score);
        console.log('Over: ', `${this.overs} / ${this.getOversByBolls(this.totalBolls)}`);
        console.log('-------------------------------------');
        if (currentPlayer.isOut) {
            console.log(currentPlayer.name, ' is :', currentPlayer.outReason, ', with run:', currentPlayer.score);
            console.log('-------------------------------------');
        }
    }

    async waitforBoll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 1000);
        });
    }

    async start () {
        let bollsLeft = this.getBollsByOver(this.overs);

        while(bollsLeft > 0) {
            this.currentPlayer = this.getPlayer();
            if (!this.currentPlayer ) {
                break;
            }
            const run = Math.round(Math.random() * 6);
            this.currentPlayer.updatePlayerScore(run);
            this.totalScore += run;
            this.totalBolls++;
            --bollsLeft;
            this.displayScore();
            await this.waitforBoll();
        }
    }
}

const game = new Game(6);
game.addPlayer(new Player('tarek', 1.2, 'run out'));
game.addPlayer(new Player('muntasir', 2, 'bold out'));
game.start();


