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

try{
    console.log('' + makeCard('A', 'S'));  // A♠
    console.log('' + makeCard('10', 'H')); // 10♥
    console.log('' + makeCard('1', 'j'));
}catch (e){
    console.log(e.message);
    console.log(e.name);
}finally {
    console.log("finally");

}
