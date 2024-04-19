const language =['Html','Css','javascript','react','node','mongoDb']

//for loop

// let print = ""
// for(let x=0; x<language.length; x++){
//     print += language[x] + "\n"
// }
// console.log(print);


//for in loop

// let print = ""

// for(let x in language){
//     print += language[x] + "\n"
// }

// console.log(print);



//for of loop

// let print = ""

// for (let x of language){
//     print += x +"\n"
// }

// console.log(print);


//map function loop

// const render = language.map((x)=>{
//     return x + "\n"
// })

// console.log(render);



//forEach function loop

// let text = ""
// const render = language.forEach((x) =>{
//         text += x + "\n"
// })
// console.log(text);


//while loop

// let text = ""
// let len = language.length
// let x = 0

// while (x < len) {
//     text += language[x] + "\n"
//     x++
// }
// console.log(text);

//do-While loop

let text=""
let len = language.length
let x = 0

do {
    text += language[x] + "\n"
    x++
}while (x < len)
console.log(text);

