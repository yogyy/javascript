let roundedGrades = [];
for (let i = 0; i < grades.length; i++) {
  let grade = grades[i];
  if (grade < 38) {
    roundedGrades.push(grade);
  } else if (grade % 5 > 2) {
    roundedGrades.push(Math.ceil(grade / 5) * 5);
  } else {
    roundedGrades.push(grade);
  }
}
return roundedGrades;
