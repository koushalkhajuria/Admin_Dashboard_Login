import "./styles.css";
import LeftNavBar from "./Components/LeftNavBar";
// important command

import GroupMaster from "./page/usergroup/GroupMaster"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Userlogreport from "./page/userlogreport/Userlogreport";
import Changepass from "./page/changepassword/Changepass";
import Resetpass from "./page/resetpassword/Resetpass";
import Usermaster from "./page/UserMaster/Usermaster";
import Userlogreportb from "./page/userlogreport/Userlogreportb";
import BoardMaster from "./Master/Boardmaster/BoardMaster";
import SubjectMaster from "./Master/Subjectmaster/SubjectMaster";
import TestMaster from "./Master/Testmaster/TestMaster";
import ExamMaster from "./Master/Exammaster/ExamMaster";
import StandardMaster from "./Master/Standardmaster/StandardMaster";
import StateMaster from "./Master/Statemaster/StateMaster";
import CourseMaster from "./Master/Coursemaster/CourseMaster";
import ClassGroupMaster from "./Master/ClassGroupMaster/ClassGroupMaster";

export default function App() {
  return (
    <div className="App">
    <BrowserRouter>
     <LeftNavBar />
 
      <Switch>
     <Route path="/usergroup">{GroupMaster}</Route>
<Route path="/userlogreport">{Userlogreportb}</Route>
<Route path="/changepassword">{Changepass}</Route>
 <Route path="/resetpassword">{Resetpass}</Route>  
 <Route path="/usermaster">{Usermaster}</Route>
 <Route path="/boardmaster">{BoardMaster}</Route>
 <Route path="/subjectmaster">{SubjectMaster}</Route>
 <Route path="/testmaster">{TestMaster}</Route>
 <Route path="/exammaster">{ExamMaster}</Route>
 <Route path="/standardmaster">{StandardMaster}</Route>
 <Route path="/statemaster">{StateMaster}</Route>
 <Route path="/coursemaster">{CourseMaster}</Route>
 <Route path="/classgroupmaster">{ClassGroupMaster}</Route>
   </Switch>
   </BrowserRouter>    
    </div>
  );
}
