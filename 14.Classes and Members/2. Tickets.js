function result(arr, state) {
    class Ticket {
        constructor(arr) {
            this.destination = arr[0];
            this.price = Number(arr[1]);
            this.status = arr[2];
        }
    }
    let res = [];
    for (let ticket of arr) {
        let arrTokens = ticket.split("|");
        res.push(new Ticket(arrTokens));
    }



    if (state === "status") {
        res=res.sort((a,b)=>a.status.localeCompare(b.status));

    } else if (state === "destination") {
        res=res.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (state === "price") {
       res=res.sort((a,b)=>a.price - b.price);

    }
   return res;
}

let resultArray = result(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination');

console.log(resultArray);