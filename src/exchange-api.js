export default class Exchange {
    static getCurrency(amount, country) {
        const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
        return fetch(url)
        .then (function(response) {
            
        })
    }
}