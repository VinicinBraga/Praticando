happens = (students, minimumQuantity) => {
  let contInTime = 0;
  for (const student of students) {
    if (student <= 0) {
      contInTime += 1;
    }
  }
  return contInTime >= minimumQuantity;
};

let studentsOnMondays = [10, -5, 3, 0];

console.log(happens(studentsOnMondays, 2));
