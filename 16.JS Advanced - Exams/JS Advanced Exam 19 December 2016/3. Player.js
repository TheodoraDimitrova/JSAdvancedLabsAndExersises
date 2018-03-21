class Player {
    constructor(nickname) {
        this.nickname = nickname;
        this.listScores = [];

    }

    addScore(score) {
        if (typeof(score) === "number") {
            this.listScores.push(score);

        }
        return this;
    }

    get highestScore() {
        if (this.listScores.length > 0) {
            let max = Math.max(...this.listScores);
            return max;
        }
    }

    get scoreCount() {
        return this.listScores.length;
    }

    get topFiveScore() {
        return this.listScores.sort((a, b) => b - a).slice(0, 5);
    }

    toString() {

        if (this.listScores.length === 0) {
            return `${this.nickname}: []`
        } else {

            return `${this.nickname}: [${this.listScores.sort(function (a, b) {
                return b - a
            })}]`;
        }
    }

}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);


