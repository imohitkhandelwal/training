// Write a JavaScript program to check the total marks of a student in various
// examinations. The student will get A+ grade if the total marks are in the
// range 89..100 inclusive, if the examination is "Final-exam." the student will
// get A+ grade and total marks must be greater than or equal to 90. Return
// true if the student get A+ grade or false otherwise.

function checkAPlusGrade(totalMarks, examType) {
    if (examType === "Final-exam" && totalMarks >= 90) {
        return true;
    } else if (totalMarks >= 89 && totalMarks <= 100) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
const totalMarks1 = 95;
const examType1 = "Final-exam";
console.log(checkAPlusGrade(totalMarks1, examType1)); // Output: true

const totalMarks2 = 85;
const examType2 = "Midterm";
console.log(checkAPlusGrade(totalMarks2, examType2)); // Output: false

const totalMarks3 = 85;
const examType3 = "Final-exam";
console.log(checkAPlusGrade(totalMarks3, examType3)); // Output: false

const totalMarks4 = 90;
const examType4 = "Final-exam";
console.log(checkAPlusGrade(totalMarks4, examType4)); // Output: true
