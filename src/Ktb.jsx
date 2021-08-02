import React, { useState } from "react"
import { Redirect } from "react-router"
import App from "./App"
export default function Ktb(){

console.log(
localStorage.getItem("user")
)

// if(localStorage.getItem("user")==null){
// return(<><Redirect to="/"></Redirect>
// {console.log(7+5)}</>)
// }

    return(<>

    <App/></>)
}