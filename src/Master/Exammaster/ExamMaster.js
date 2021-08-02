import { directive } from "@babel/types";
import React from "react";
import Heading from "./Components/Heading.jsx"
import Table from "./Components/Table.jsx"
import "./ExamMaster.css";


export default function ExamMaster(){

  return(<div className="ExamMaster">
         <div className="fullForm34">

         <Heading/>
         </div>
         <Table/>
         </div>)
 

}
