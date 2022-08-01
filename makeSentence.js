// Use the rest parameter to create a makeSentence function that concatenates an unlimited amount of strings

// TIP: Make sure to test your code with different values. For example,
// makeSentence() should return an empty string
// makeSentence("I", "love", "JavaScript" ) should return "I love JavaScript"
// makeSentence(1, 2, 3) should return "1, 2, 3"

function makeSentence(...strings){
    if(!!strings.length){
        return strings.reduce((acc, string, i) => {
            if(i != strings.length){
                acc += " "
            } 
            acc += string
            return acc
        }, "")   
    }
    return ""
}
console.log("empty makeSentence", makeSentence())
console.log("I love JS", makeSentence("I", "love", "JavaScript" ))
console.log("1, 2, 3", makeSentence(1, 2, 3))