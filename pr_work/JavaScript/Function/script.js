// Function

// function MyFunction(){
//     console.log("Hello World!");
// }

// MyFunction()

// function totalFunc(a,b){
//     return a+b
// }

// console.log(totalFunc(10,20));



// Arrow Function

// const MyArrowFunc = () => {
// console.log("Hello World!!");
// }

// MyArrowFunc()

// const decrementtation = (x,y) => {
//     return x - y 
// }

// console.log(decrementtation(10,5));


// MyFunc()

// function MyFunc() {
//   console.log("Simp Func");
// }



// const MyArrFunc = () => {
//   console.log("Arr Func");
// }
// MyArrFunc()


let themeContent = document.getElementById("themeContent")


function changeTheme() {
  let $class = themeContent.getAttribute("class")

  if ($class == "box light") {
    themeContent.setAttribute("class", "box dark")
  } else {
    themeContent.setAttribute("class", "box light")
  }
  
}
