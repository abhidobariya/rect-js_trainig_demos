import "./index.css"
import About from "./About"

export default function App(){

  const user = "chagan"

  return(
    <>
      <h1 className="myHeading">Hello World! {user} </h1>
      <p style={{ backgroundColor: "greenyellow", color: "blue" }}>Lorem ipsum dolor sit amet.</p>
      {/* <MyFunction /> */}
      <About />
    </>
  )
}

function MyFunction(){
  return<h1>another function</h1>
}