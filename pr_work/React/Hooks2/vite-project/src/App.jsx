import { useState } from 'react'

import './App.css'

   const MyUseState=() => {
     return (
    <>
      <OddEven />
    </>
  )
}
export default MyUseState;


function OddEven() {
const [click, setClick] = useState(0);
return(
  <>
    <div>
      <p>You've clicked {click} times!</p> 
            <p>The number of times you have clicked 
                is {click % 2 == 0 ? 'even!' : 'odd!'}</p> 

                <button onClick={() => setClick(click => click +1)}>
                  Click me
                </button>
    </div>
  </>
  )
}



