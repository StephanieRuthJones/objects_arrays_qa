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
const playerProfiles = basketballPlayers.map(player => {
    const {name, freeThrowRating, offenseRating, defenseRating} = player
    if(moreThanFour(freeThrowRating) || moreThanFour(offenseRating) || moreThanFour(defenseRating)){
        return `${name} is a basketball star`
    }
    return `${name} is a basketball dud`
})

function moreThanFour(rating) {
  return rating > 4
}
console.log(playerProfiles);