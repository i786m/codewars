// Write a program that outputs the top n elements from a list.

// Example:

// largest(2, [7,6,5,4,3,2,1])
// // => [6,7]


function largest(n,xs){
    let res=[]
    let sorted=xs.sort((a,b)=>b-a)
    let i = 0
    while (i<n){
    res.unshift(sorted[i])
    i++
    }
  return res
}