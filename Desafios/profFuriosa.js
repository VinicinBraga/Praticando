happens = (students, minimumQuantity) => {
  let contInTime = 0;
  for (const student of students) {
    if (student <= 0) {
      contInTime += 1;
    }
  }
  return contInTime >= minimumQuantity;
};

openings = (daysArrivals, minimumQuantity) => {
  finalArray = [];
  for (const day of daysArrivals) {
    finalArray.push(happens(day, minimumQuantity));
  }
  return finalArray;
};

let studentsOnMondays = [10, -5, 3, 0, -3];
let studentsOnTusday = [2, 10, -5, 3, 1];
let studentsOnwednesday = [10, -5, 3, 4];
console.log(
  openings([studentsOnMondays, studentsOnTusday, studentsOnwednesday], 2)
);
