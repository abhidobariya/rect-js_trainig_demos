//For Loop
// const render = document.getElementById("render")
// const language = ["HTML", "CSS", "JavaScript", "React"]
// const $length = language.length

// let text = ""
// for (let x = 0; x < $length; x++) {
//    text += language[x]
//   //console.log(language[x]);
// }

// render.innerHTML = text



//---------------------

const users = [
    {
        fname: "Mark",
        lname: "Wood",
        age: 29
    },

    {
        fname: "Leo",
        lname: "Duck",
        age: 19
    },

    {
        fname: "Stark",
        lname: "Michal",
        age: 16
    },

    {
        fname: "Maxwell",
        lname: "Glenn",
        age: 40
    }
]


const userlen = users.length
console.log(userlen)
//let $render = ""

// for(let x=0; x < userlen; x++){
//     $render += `<h1>${users[x].fname + " " + users[x].lname}</h1>`
// }

// console.log($render);
// document.getElementById("render").innerHTML = $render


//----map() (function)

// const maploop = users.map((x) =>{
//     return `<h3>${x.fname + " " + x.lname}</h3>`
// })

// console.log(maploop.join(""));
// document.getElementById("render").innerHTML = maploop.join("")



//---forEach() (function)

// let render = ""

// users.forEach((x) => {
//     render += `<h2>${x.fname + " " + x.lname}</h2>`
// })

// console.log(render);
// document.getElementById("render").innerHTML = render


//* for in loop

// let text = ""
// for (x in users) {
//   text += " " + users[x].fname
// }

// console.log(text);

//* for of loop

// let text = ""
// for (x of users) {
//   text += x.fname
// }

// console.log(text);


//* while loop

// let lang = users.length
// let x = 0
// let text = ""

// while (x > lang) {
//   text += users[x].fname
//   x++
// }

// console.log(text);

//* do while loop

// text = ""
// let lang = users.length
// let x = 0

// do {
//   text += users[x].fname
//   x++
// } while (x < lang)

// console.log(text);

//! Break and continue

let text = ""
let x = 0

for (; x < 10; x++) {
  if (x == 5) {
    // break;
    continue;
  }

  text += x + "\n"
}

console.log(text);
