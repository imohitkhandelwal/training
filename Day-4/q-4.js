//. Write a JavaScript program to get the difference between a given number
// and 13, if the number is greater than 13 return double the absolute difference.
function getDifference(n){
    if(n<=13){
        return 13-n;
    }
    else{
        return 2*(n-13);
    }
}


console.log(getDifference(13)); // 0
console.log(getDifference(35)); // 44
console.log(getDifference(7)); // 6