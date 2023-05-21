require("dotenv").config()
const axios = require("axios");

function totalProducts(products) {
    let total = 0;
    for (let t = 0; t < products.length; t++) {
        total += products[t].price;
    }
    console.log("total Products:" + total);
    return total;
}

async function httpRequest(ids) {
    try {
        const URL = process.env.MICRO_URL
        const response = await axios.post(URL, { ids: ids }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return totalProducts(response.data);
    } catch (error) {
        console.error(error);
    }
}

module.exports = { totalProducts, httpRequest }