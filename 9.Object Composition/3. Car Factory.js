function solve(order) {
    let result = {};
    result.model = order.model;
    result.engine= power(order.power);
    result.carriage = carriage(order.carriage, order.color);
    result.wheels=wheelSize(order.wheelsize);
    function power(wishPower) {
        if (wishPower <= 90) {
            return {power: 90, volume: 1800};
        } else if (wishPower <= 120) {
            return {power: 120, volume: 2400};
        } else if (wishPower <= 200) {
            return {power: 200, volume: 3500};
        }

    }
    function carriage(carriageType, color) {
        if (carriageType === "coupe") {
            return {type: 'coupe', color: color};
        } else if (carriageType === "hatchback") {
            return {type: 'hatchback', color: color};
        }
    }
    function wheelSize(wheel) {
        if(wheel%2!==0){
            return Array(4).fill(wheel);
        }else{
            return Array(4).fill(wheel-1);

        }

    }

   return result;
}
console.log(solve({
        model: 'Brichka',
        power: 65,
        color: 'white',
        carriage: 'hatchback',
        wheelsize: 16
    }
));