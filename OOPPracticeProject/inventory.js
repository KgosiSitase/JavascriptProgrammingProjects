// An object constructor of shoes
function Shoes(name, productCode, quantity, valuePerItem) {
    // Object properties
    this.name = name;
    this.productCode = productCode;
    this.quantity = quantity;
    this.valuePerItem = valuePerItem;
};
// Five different shoe instances
let firstShoe = new Shoes("Air Force One", 145772891678, 6, 1500);
let secondShoe = new Shoes("Superstar", 194392191618, 9, 1000);
let thirdShoe = new Shoes("All Star", 172782891618, 2, 600);
let forthShoe = new Shoes("Nike Dunks", 110732890679, 7, 1800);
let fifthShoe = new Shoes("Jordan 1", 107772001672, 1, 2100);

// Empty array
const topShoes = [];

// Adding instances to the array
topShoes.push(firstShoe);
topShoes.push(secondShoe);
topShoes.push(thirdShoe);
topShoes.push(forthShoe);
topShoes.push(fifthShoe);

// Function to search for any shoe within the array
function searchForShoe(searchQuery) {
    return topShoes.filter(function(shoe) {
        return shoe.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
}

// Function to find the shoe with the lowest value per item
function findLowestValuePerItem() {
    return topShoes.reduce(function(minShoe, currentShoe) {
        return minShoe.valuePerItem < currentShoe.valuePerItem ? minShoe : currentShoe;
    });
}

// Function to find the shoe with the highest value per item
function findHighestValuePerItem() {
    return topShoes.reduce(function(maxShoe, currentShoe) {
        return maxShoe.valuePerItem > currentShoe.valuePerItem ? maxShoe : currentShoe;
    });
}

// Function to edit all 4 properties for each of the five shoe instances
function editShoeProperties(newPropertiesArray) {
    topShoes.forEach(function(shoe, index) {
        shoe.name = newPropertiesArray[index][0];
        shoe.productCode = newPropertiesArray[index][1];
        shoe.quantity = newPropertiesArray[index][2];
        shoe.valuePerItem = newPropertiesArray[index][3];
    });
}

// Function to order all of the objects in ascending order based on the "Value per item" property
function orderShoesByValuePerItem() {
    return topShoes.sort(function(a, b) {
        return a.valuePerItem - b.valuePerItem;
    });
}


console.log("Search Result:", searchForShoe("Nike"));
console.log("Shoe with Lowest Value per Item:", findLowestValuePerItem());
console.log("Shoe with Highest Value per Item:", findHighestValuePerItem());
editShoeProperties([
    ["Edited Shoe 1", "EDT001", 20, 200],
    ["Edited Shoe 2", "EDT002", 15, 250],
    ["Edited Shoe 3", "EDT003", 10, 300],
    ["Edited Shoe 4", "EDT004", 5, 350],
    ["Edited Shoe 5", "EDT005", 3, 400]
]);
console.log("Ordered by Value per Item:", orderShoesByValuePerItem());