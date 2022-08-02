
// Use the rest parameter to create a makeSentence function that concatenates an unlimited amount of strings
//Rest Parameter [ …rest] 
//A collection of all remaining elements (hence, the name rest, as in “the rest of the elements”) into an array.

//Spread Operator […spread] - opposite to rest parameter, 
//where rest parameter collects items into an array, 
//the spread operator unpacks the collected elements into single elements.

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