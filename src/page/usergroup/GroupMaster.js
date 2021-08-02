import { directive } from "@babel/types";
import React from "react";
import Heading from "./Components/Heading.jsx"
import Table from "./Components/Table.jsx"
import "./GroupMaster.css";


export default function GroupMaster(){

  return(<div className="groupMasterK">
         <div className="finalformK">

         <Heading/>
         </div>
         <Table/>
         </div>)
 

}
