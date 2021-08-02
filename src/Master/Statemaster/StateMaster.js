import { directive } from "@babel/types";
import React from "react";
import Heading from "./Components/Heading.jsx"
import Table from "./Components/Table.jsx"
import "./StateMaster.css";


export default function StateMaster(){

  return(<div className="CourseMasterS">
         <div className="finalformS">

         <Heading/>
         </div>
         <Table/>
         </div>)
 

}
