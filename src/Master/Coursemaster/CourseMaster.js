import { directive } from "@babel/types";
import React from "react";
import Heading from "./Components/Heading.jsx"
import Table from "./Components/Table.jsx"
import "./CourseMaster.css";


export default function CourseMaster(){

  return(<div className="CourseMasterKK">
         <div className="finalformKK">

         <Heading/>
         </div>
         <Table/>
         </div>)
 

}
