const books = [
  {
    "id": 0,
    "authorFirstName": "Leo",
    "authorLastName": "Tolstoy",
    "fullName": "Leo Tolstoy",
    "title": "Anna Karenina",
    "readBy": 2
  },
  {
    "id": 1,
    "authorFirstName": "Harper",
    "authorLastName": "Lee",
    "fullName": "Harper Lee",
    "title": "To Kill a Mockingbird",
    "readBy": null
  },
   {
    "id": 2,
    "authorFirstName": "F.Scott",
    "authorLastName": "Fitzgerald",
    "fullName": "F.Scott Fitzgerald",
    "title": "The Great Gatsby",
    "readBy": "Leo Tolstoy"
  },
    {
    "id": 3,
    "authorFirstName": "James",
    "authorLastName": "Joyce",
    "fullName": "James Joyce",
    "title": "Ulysses",
    "readBy": "Harper Lee"
  },
  {
    "id": 4,
    "authorFirstName": "Miguel",
    "authorLastName": "de Cervantes",
    "fullName": "Miguel de Cervantes",
    "title": "Don Quixote",
    "readBy": 3
  },
  {
    "id": 5,
    "authorFirstName": "Gabriel",
    "authorLastName": "Garcia Marquez",
    "fullName": "Gabriel Garcia Marquez",
    "title": "One Hundred Years of Solitude",
    "readBy": 3
  },
  
]

// Filter only the books that were read (do not include books that were not read)
// if a book was read by an author on the list, 
// replace the author's index (number) with the author's name
// use only .map(), .find() and .filter()

// YOUR CODE GOES HERE

