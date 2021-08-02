import { directive } from "@babel/types";
import React from "react";
import Heading from "./Components/Heading.jsx"
import Table from "./Components/Table.jsx"
import "./BoardMaster.css";


export default function BoardMaster(){

  return(<div className="BoardMaster">
         <div className="fullForm">

         <Heading/>
         </div>
         <Table/>
         </div>)
 

}
