//121. Best Time to Buy and Sell Stock


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = 10000, maxProfit = 0;
    for(let price of prices) {
        if(minPrice > price) {
            minPrice = price;
        }
        if(maxProfit < price - minPrice) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
};