console.log("Hey Sadhvika!!");
console.log("I love you thalli");
console.log("Thank You for Coming into my life!!")
// for loop intro
for(let i = 0; i < 5; i++){
    console.log("SadhVee")
}

//arrays
var groceryList = ["milk", "water", "fruits", "medicine", "liquor"];
console.log(groceryList[0])
console.log(groceryList[2])
console.log(groceryList[4])

// .length property
var lengthOfGroceryList = groceryList.length;
console.log(lengthOfGroceryList);
// console.log(groceryList[lengthOfGroceryList - 1]);
function log(data){
    console.log(data)
}
//for and array clubbing
for ( let i = 0; i < lengthOfGroceryList; i++) {
    log(groceryList[i]);
}

//objects and array of objects

const superHeroArr = [
    batman = {
        name: "batman",
        power: "martial arts",
        strength: 100,
        costumeColor: "black",
        stealth: 100,
        intelligence: 1000,
    },
    superman = {
        name: "superman",
        power: "flight",
        strength: 10000,
        costumeColor: "red",
        stealth: 0,
        intelligence: 100,
    }
];

for(let i = 0; i < superHeroArr.length; i++) {
    printObjects(superHeroArr[i].name, superHeroArr[i].costumeColor)
}

function printObjects(name, color){
    console.log(name, color);
}