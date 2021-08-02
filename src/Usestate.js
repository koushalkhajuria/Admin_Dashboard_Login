import React, { useState } from "react"

export default function Usestate(){
    var a
const [currentvale,updatevalue]=useState("")

function search(uayrbgfsdbgdkf){
    updatevalue(uayrbgfsdbgdkf.target.value)

 a=uayrbgfsdbgdkf.target.value;
console.log(a);
}
    return(<>


        <input type="text" placeholder="Rupa"  onChange={search}  />
        <input type="text" value={a} placeholder="let me show u some thing beat.... " />
    </>)
}