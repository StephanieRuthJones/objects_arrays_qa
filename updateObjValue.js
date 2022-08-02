function wasRead(book) {
    return book.readBy !== null;
}

function readByAnotherAuthor(book) {
    return typeof book.readBy === "number";
}

function addReaderName(book) {
    if (readByAnotherAuthor(book)){
        const { title } = books[book.readBy];
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