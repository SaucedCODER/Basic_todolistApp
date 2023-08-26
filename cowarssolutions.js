//zeroOrOne=(n,s)=>s[0].map((_,i)=>s.reduce((a,e)=>a+e[i],0)>n/2|0)
// zeroOrOne=(n,s)=>s.map((_,i)=>s.reduce((a,e)=>a+e[i],0)>n/2|0)
// zeroOrOne=(n,s)=>s.map((e,i)=>e.map((x)=>(e[i]+x)-1))[(n-1)/2]
//zeroOrOne=(n,s)=>s.reduce((a,e)=>e.map((x,i)=>a[i]+x)).map(x=>x>n/2|0)
//zeroOrOne=(n,s)=>s[0].map((_,i)=>2>n+s.reduce((a,e)=>a-e[i],0)|0)
//zeroOrOne=(n,s)=>s[0].map((_,i)=>+eval(s.map(r=>r[i]).join``+`>n/2`))
//zeroOrOne=(n,s)=>s[0].map((_,i)=>s.reduce((a,e)=>a+=e[i]?1:-1,0))
//zeroOrOne=(n,s)=>s[0].map((_,i)=>+(s.reduce((a,e)=>a+e[i],0)>n/2))
//zeroOrOne=(n,s)=>s[0].map((_,i)=>+(s.reduce((a,e)=>a+e[i],0)>n/2))
//zeroOrOne=(n,s)=>s[0].map((_,i)=>eval(s.map(r =>r[i]).join('')+`>=n/2`)|0);
//


// let res = zeroOrOne(3,[
//     [1,0,1,0,1], 
//     [1,0,1,0,1], 
//     [0,1,0,1,0]]);

//     console.log(res);

//   console.log(`zeroOrOne=(n,s)=>s[0].map((_,i)=>s.reduce((a,e)=>a+e[i],0)>n/2|0)`.length); // Output: [false, true, true]
 
// const zeroOrOne=(n,s)=>s[0].map((_,i)=>+eval(s.map(r=>r[i]).join``+`>n/2`));
                                        //+eval(`${s.map(e=>e[i]).join``}*2>n`)
// const zeroOrOne=(n,s)=>s.map((_,i)=>{
      
//         return n<s.reduce((a,e)=>{
//                return +a+e[i]
//         },n)
// })
// const zeroOrOne=(n,s)=>s[0].map((_,i)=>0!=s.reduce((a,e)=>a - e[i],0)|0)
// let count = 0,n=5

// zeroOrOne=(n,s)=>s[0].map((_,i)=>s.reduce((a,e)=>a+=e[i]?1:-1,0))
// zeroOrOne=(n,s)=>s[0].map((_,i)=>n/2<s.reduce((a,e)=>a+e[i],0)|0)


// // Usage:
// console.log(zeroOrOne(5,[
//         [1,1,1,1,1], 
//         [0,0,0,1,1], 
//         [0,0,0,1,0],
//         [0,0,1,1,0],
//         [0,0,1,1,0]]))
// Transpose the matrix
// function rotateAndOutput(matrix, output = []) {
//         if (matrix.length === 0) {
//           return output;
//         }
      
//         // Output first row left to right
//         output.push(...matrix.shift());
      
//         // Output last column top to bottom
//         for (let i = 0; i < matrix.length; i++) {
//           output.push(matrix[i].pop());
//         }
      
//         // Output last row right to left
//         if (matrix.length > 0) {
//           output.push(...matrix.pop().reverse());
//         }
      
//         // Output first column bottom to top
//         for (let i = matrix.length - 1; i >= 0; i--) {
//           output.push(matrix[i].shift());
//         }
      
//         // Recursively rotate the submatrix and output its elements
//         return rotateAndOutput(matrix, output);
//       }
      
//       const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
//       const output = rotateAndOutput(matrix);
      
//       console.log(output); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]
// const alphabet = [];

// for (let i = 97; i <= 122; i++) {
//   alphabet.push(String.fromCharCode(i));
// }

// console.log(alphabet);
// Output: ["a", "b", "c", ..., "x", "y", "z"]
// function createCalculator(a) {
 
//   return {
//     add:function(b){
//       console.log(a + b);
//       return createCalculator(a + b)
//     },
//     subtract:function(b){
//       console.log(a - b);
//       return createCalculator(a - b)
      
//     },
//     multiply:function(b){
//       return createCalculator(a * b)
      
//     },
//     divide:function(b){
//       return createCalculator(a / b)
      
//     },answer:a
// } 
// }

// const calculator = createCalculator(10);
// console.log(calculator.add(5).subtract(3).multiply(2).divide(4));

// .subtract(3).multiply(2).divide(4); // should return 3
function sum(num1=undefined) {
  let result = num1 || 0;
  
  function add(num2) {
    if (num2 === undefined) {
      return result;
    }
    
    result += num2;
    return add;
  }
  
  add.valueOf = function() {
    return result;
  }
  
  return add;
}


console.log(sum(1)(2)(3)()); // Output: 6
console.log(sum(10)(20)(30)(-10)(5)()); // Output: 55
console.log(sum()()); // Output: 0

 // should return 9
// sum(1)(2)(3)(4)(5)(6) // should return 15
