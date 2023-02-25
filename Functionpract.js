function sum1(arr){
    let sum = 0;
    for (let arr2 of arr){
        sum = sum +arr2;
    }
    return sum;
}

let array = [1,2,3,4,5,6,6,7,8,0];
let arraysum = sum1(array);
console.log(arraysum);