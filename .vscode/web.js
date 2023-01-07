// for loop
// for(begin,condition,step){}

// let arr=[1,2,3,4,5,7,8,9]

// for(let i=0; i<arr.length; i++){
   
//     console.log(arr[i])
// // }
// for(let i=0; i<arr.length; i++){
   
// //     console.log(arr[i])
// // }
// function elly(num1, num2, num3){
// let result = num1 +  num2 + num3
// return result
// }

// console.log(elly(5,4,2))
// console.log(elly(7,2,1))

//Given an array of numbers find the sum
let array=[1,2,3,4,5]

function sumNumber(arr){
let sum=0
for(let i=0; i<arr.length;i++){
    sum+=arr[i]
}
return sum
}
console.log(sumNumber([1,2,3,4,5]))

