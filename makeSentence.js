
// Use the rest parameter to create a makeSentence function that concatenates an unlimited amount of strings

// TIP: Make sure to test your code with different values. For example,
// makeSentence() should return an empty string
// makeSentence("I", "love", "JavaScript" ) should return "I love JavaScript"
// makeSentence(1, 2, 3) should return "1, 2, 3"
// function makeSentence(...strings){
//     let newString = ""
//     if(!!strings.length){
//         const finalIndex = strings.length - 1
//         console.log("finalIndex", strings[finalIndex])
//         strings.forEach((string, i) => {
//             newString += `${string}`
//             if(i !== finalIndex){
//                 newString += " "
            
//         }
//     })
//     return newString
//     }   
// }

function makeSentence(...strings){
    return strings.reduce((acc, string, i) => {
        acc += string
        return acc
    }, "")   
}
makeSentence()
makeSentence("I", "love", "JavaScript" )
makeSentence(1, 2, 3)