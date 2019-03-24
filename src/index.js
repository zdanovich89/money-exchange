// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    let  coins= {};

    if(currency > 10000)return { error: "You are rich, my friend! We don't have so much coins for exchange"};

    if(currency <= 0) return  coins;

    if (currency >= 50){
      coins.H = parseInt(currency / 50);
        currency = currency % 50;
    }

    if (currency >= 25){
      coins.Q = parseInt(currency / 25);
        currency = currency % 25;
    }

    if (currency >= 10){
      coins.D = parseInt(currency / 10);
        currency = currency % 10;
    }
    if (currency >= 5){
      coins.N = parseInt(currency / 5);
        currency = currency % 5;
    }

    if (currency >= 1){
      coins.P = currency;
    }

    if(currency > 10000)return { error: "You are rich, my friend! We don't have so much coins for exchange"};

    return coins;
}