import React from 'react'
import { users } from "./Data"


const About = () => {
  return (
    <>
    <div>           {
      users.map((x) => {
        return (
          <div>
            <h1>{x.fname} {x.lname}</h1>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default About