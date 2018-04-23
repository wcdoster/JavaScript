const scores = [82, 71, 62, 95, 55, 77, 98, 69, 72, 78, 84, 64, 58, 87, 60]

//How many of each grade? Accomplish this with a for..in loop.
const grades = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    f: 0,
}

for(i in scores) {
    if (scores[i] >= 91){
        grades.a += 1;
    }else if (scores[i] >= 81){
        grades.b += 1;
    }else if (scores[i] >= 71){
        grades.c += 1;
    }else if (scores[i] >= 61){
        grades.d += 1;
    }else {
        grades.f += 1;
    }
}

console.log(grades);

//What is the lowest score? Sort the array and find out.
const lowestGrade = scores.sort()[0];
console.log(lowestGrade);

//What is the highest score?
const highestGrade = scores.sort( (a, b) => {
    return b - a;
})[0];
console.log(highestGrade);

/*Which grade had the most students achieve it? Use an 
if statment, and a currentGradeCount variable, in your for..in 
loop to see if the current grade's value is higher than the last one. */
let mostGrades = "";
let currentGradeCount = 0;
for(grade in grades) {
    if(grades[grade] > currentGradeCount) {
        currentGradeCount = grades[grade];
        mostGrades = grade;
    }
}
console.log(mostGrades);

// Which grade had the fewest students achieve it?
let leastGrades = "";
currentGradeCount = 10;
for(grade in grades) {
    if(grades[grade] < currentGradeCount) {
        currentGradeCount = grades[grade];
        leastGrades = grade;
    }
}
console.log(leastGrades);
