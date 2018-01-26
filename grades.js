const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]
const grades = {} // You'll need to change this line of code
grades.A = 0;
grades.B = 0;
grades.C = 0;
grades.D = 0;
grades.F = 0;
topScore = 0;
lowScore = 0;

for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        grades.A += 1;
    } else if (scores[i] >= 80 && scores[i] < 90) {
        grades.B += 1;
    } else if (scores[i] >= 70 && scores[i] < 80) {
        grades.C += 1;
    } else if (scores[i] >= 60 && scores[i] < 70) {
        grades.C += 1;
    } else if (scores[i] < 60) {
        grades.F += 1;
    }
    /*
      If the score is greater than 90, increment grades.A by 1.

      You can use a series of `if/then` blocks, but you could
      also achieve this with a switch statement.
    */
}

console.log("A:" + grades.A);
console.log("B:" + grades.B);
console.log("C:" + grades.C);
console.log("D:" + grades.D);
console.log("F:" + grades.F);

console.log(Math.max(...scores));
console.log(Math.min(...scores));

var commonScores = [grades.A, grades.B, grades.C, grades.D, grades.F];
commonScores.sort(function (a, b) {return b - a});
console.log(commonScores[0]);

var uncommonScores = [grades.A, grades.B, grades.C, grades.D, grades.F];
uncommonScores.sort(function (a,b) {return a - b});
console.log(uncommonScores[0]);


function myFunction() {
    grades.sort(function(a, b){return a.grades - b.grades});
    highScores();
    
}





