function printDeckOfCards(arr) {
    function makeCard(face, suit) {
        let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let validSuits = ["S", "H", "D", "C"];  // S (♠), H (♥), D (♦), C (♣)
        if (!validFaces.includes(face)) {
            throw new Error("Invalid Face");
        }
        if (!validSuits.includes(suit)) {
            throw  new Error('Invalid Suite');
        }
        let card = {
            face: face,
            suit: suit,
            toString: function () {
                let suitToChar = {
                    'S': "\u2660", // ♠
                    'H': "\u2665", // ♥
                    'D': "\u2666", // ♦
                    'C': "\u2663", // ♣
                };

                return `${card.face}${suitToChar[card.suit]}`;
            }
        };
        return card;

    }

    let deck = [];

        for (let card of arr) {
            let face = card.substring(0, card.length - 1);
            let suite = card[card.length - 1];
            try{
                deck.push(makeCard(face, suite));
            }catch (e){
                console.log("Invalid card: " + card);
                return;
            }
        }

    console.log(deck.join(" "));
}
printDeckOfCards(['3D', 'JC', '2S', '10H', '5X']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
printDeckOfCards(['AS', '10D', 'KH', '2C']);

