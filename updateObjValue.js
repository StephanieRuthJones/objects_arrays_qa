function wasRead(book) {
    return book.readBy !== null;
}

function readByAnotherAuthor(book) {
    return typeof book.readBy === "number";
}

function addReaderName(book) {
    if (readByAnotherAuthor(book)){
        const { title } = books[book.readBy];
        //Spread Operator […spread] - opposite to rest parameter, 
        //where rest parameter collects items into an array, 
        //the spread operator unpacks the collected elements into single elements.
        //resource: https://javascript.plainenglish.io/es6-spread-parameter-vs-rest-operator-5e3c924c4e1f
        const editedbook = {
            ...book, 
            readBy: title
        };

        return editedbook;
    }
    return book;
}

const read = books
    .filter(wasRead)
    .map(addReaderName);

console.log(read);