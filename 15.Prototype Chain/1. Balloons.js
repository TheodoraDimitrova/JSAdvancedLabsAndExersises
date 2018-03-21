function result() {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = Number(gasWeight);
        }
    }
    class PartyBalloon extends Balloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);
            this.ribbonLength = Number(ribbonLength);
            this.ribbonColor = ribbonColor;
            this._ribbon={
                color:ribbonColor,
                length:ribbonLength
            }
        }

        get ribbon() {
            return this._ribbon;
        }

//The PartyBalloon class should have a property ribbon,
// which is an object with color and length – the ones given upon initialization. The ribbon property should have a getter.

    }
    class BirthdayBalloon extends PartyBalloon {

        constructor(color, gasWeight, ribbonColor, ribbonLength, text) {
            super(color, gasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }

        get text() {
            return this._text;
        }
    }

    return {Balloon: Balloon, PartyBalloon: PartyBalloon, BirthdayBalloon: BirthdayBalloon}
}

let classes = result();
let Balloon=classes.Balloon;
let PartyBalloon=classes.BirthdayBalloon;
let BirthdayBalloon=classes.BirthdayBalloon;
let b=new Balloon("red",3);
//console.log(b);
let pb=new PartyBalloon("Tumno-bqlo", 20.5, "Svetlo-cherno", 10.25);
console.log(pb);
console.log(pb.text);
console.log(pb.ribbonLength);
console.log(pb.ribbon);
let bb=new BirthdayBalloon("purple",10,'green',50,"Merry me");
//console.log(bb.text);
//console.log(bb);