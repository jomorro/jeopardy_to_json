const HTTPClient = require('./httpClient.js');
const fs = require('fs');
const url = 'http://jservice.io/api/category?id=';
const categoriesArray = [67, 780, 277, 223, 184, 680, 21, 309, 582, 267, 136, 249, 105, 770, 508, 561, 420, 37, 1195, 25, 897];

// function map (array, callback) {
//     const newArray = []

//     for (let i = 0; i < array.length; i++) {
//         newArray.push(callback(array[i]))
//     } 

//     return newArray
// }

const categoryPromises = categoriesArray.map(id => HTTPClient(url + id))

Promise.all(categoryPromises)
    .then(categories => 
        fs.writeFileSync('./categories.json', JSON.stringify(categories))
)