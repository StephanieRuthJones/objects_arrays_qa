//https://github.com/StephanieRuthJones/objects_arrays_qa

//Question for class: 
//What method might be used to add something to an array (cart), as we did in the addProductToCart function on the project?
//arrayName.push(itemToAdd)
//What needs to be done in our code BEFORE an item is added to the cart?
//check if the array already includes the item

/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/

const basketballPlayers = [
    {
        name: "Jordan",
        freeThrowRating: 2,
        defenseRating: 1,
        offenseRating: 3
    },
    {
        name: "LaBron",
        freeThrowRating: 4.5,
        defenseRating: 2,
        offenseRating: 5
    },
    {
        name: "Nowitzki",
        freeThrowRating: 3,
        freeThrowRating: 4,
        defenseRating: 5,
        offenseRating: 5
    },
    {
        name: "Pierce",
        freeThrowRating: 2,
        defenseRating: 1,
        offenseRating: 3

    },
]
//create a new array of strings called playerProfiles that describes the basketball players in the basketballPlayers array
//If the player has any rating greater than 4, the string should read "[player name] is a basketball star"
//If the player does not have any rating greater than 4, the string should read "[player name] is a basketball dud"
const playerProfiles = 
console.log(playerProfiles);