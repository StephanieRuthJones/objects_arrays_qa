const classList = [
  ["Intro to JavaScript", 20],
  ["Arrays and Objects Q&A", 100],
  ["Project Walkthrough", 75],
  ["Learning to Learn", 97],
];
//Use the .forEach method to iterate over the classList array
//Add each class title to the classAttendanceCount object as a key
//Add each class' number of attendees to the classAttendanceCount object as the class title's value
//Log classAttendanceCount to ensure you have succeeded in the above tasks

const classAttendaceCount = {};

classList.forEach(function(classObject) {
  const [title, numAttendees] = classObject;
  classAttendaceCount[title] = numAttendees;
});

console.log(classAttendaceCount);