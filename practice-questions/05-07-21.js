
// One:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function findProductOfArray(arr){
    return arr.reduce((acc,c)=>acc*c,1)
}

// Two:
// You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function findAgeRange(arr){
    let youngest = Math.min(...arr),
        oldest = Math.max(...arr),
        ageRange = oldest - youngest
    return [youngest, oldest, ageRange]
}

// Three:
// Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
// Example:
// [ 6, 2, 1, 8, 10 ] => 16
// [ 1, 1, 11, 2, 3 ] => 6

function sumAllExceptHighestAndLowest(arr){
    arr.sort((a,b)=>a-b)
    arr.shift()
    arr.pop()
    return arr.reduce((acc,c)=>acc+c,0)
}