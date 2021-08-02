import React, { useRef, useState } from "react";
import TopNavBarIcon from "./TopNavBarIcon";
import ArrayMiddleIcons from "./ArrayMiddleIcons";
import ArrayDownIcons from "./ArrayDownIcons";
import UserInnerIcons from "./UserInnerIcons";
import { NavLink, Route, Switch } from "react-router-dom";
import ArrayMasterIcon from "./ArrayMasterIcons"

export default function LeftNavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu2, setShowMenu2] = useState(false);
  const [showMenu1, setShowMenu1] = useState(true);

  const activeClick0=()=>{
    document.querySelector("#DashboardI").style.background="#fff";
    document.querySelector("#DashboardI").style.borderRadius="10px";
    document.querySelector("#DashboardIc").style.color="#0759e4";
    
    document.querySelector("#UserI").style.background="#0759e4";
    document.querySelector("#UserI").style.borderRadius="10px";
    document.querySelector("#UserIc").style.color="#fff";
    
    document.querySelector("#MasterI").style.background="#0759e4";
    document.querySelector("#MasterI").style.borderRadius="10px";
    document.querySelector("#MasterIc").style.color="#fff";
    if(showMenu1==true){
    document.querySelector("#DashboardT").style.color="#0759e4";
    document.querySelector("#UserT").style.color="#fff";
    document.querySelector("#MasterT").style.color="#fff";}

    if(showMenu2==true){
    ( setShowMenu2(showMenu2 ? false : true))}
    if(showMenu==true){
     ( setShowMenu(showMenu ? false : true))}
  }

  const activeClick1 = () => {
    setShowMenu(showMenu ? false : true);

    document.querySelector("#DashboardI").style.background="#0759e4";
    document.querySelector("#DashboardI").style.borderRadius="10px";
    document.querySelector("#DashboardIc").style.color="#fff";
    
    document.querySelector("#UserI").style.background="#fff";
    document.querySelector("#UserI").style.borderRadius="10px";
    document.querySelector("#UserIc").style.color="#0759e4";
    
    document.querySelector("#MasterI").style.background="#0759e4";
    document.querySelector("#MasterI").style.borderRadius="10px";
    document.querySelector("#MasterIc").style.color="#fff";
    if(showMenu1==true){
    document.querySelector("#DashboardT").style.color="#fff";
    document.querySelector("#UserT").style.color="#0759e4";
    document.querySelector("#MasterT").style.color="#fff";}
    
    return(<>
    {showMenu2==true?
   ( setShowMenu2(showMenu2 ? false : true)):(null)}
   </> )
  };

  const activeClick2 = () => {
    setShowMenu2(showMenu2 ? false : true);

    document.querySelector("#DashboardI").style.background="#0759e4";
    document.querySelector("#DashboardI").style.borderRadius="10px";
    document.querySelector("#DashboardIc").style.color="#fff";
    
    document.querySelector("#MasterI").style.background="#fff";
    document.querySelector("#MasterI").style.borderRadius="10px";
    document.querySelector("#MasterIc").style.color="#0759e4";
    
    document.querySelector("#UserI").style.background="#0759e4";
    document.querySelector("#UserI").style.borderRadius="10px";
    document.querySelector("#UserIc").style.color="#fff";
    if(showMenu1==true){
    document.querySelector("#DashboardT").style.color="#fff";
    document.querySelector("#UserT").style.color="#fff";
    document.querySelector("#MasterT").style.color="#0759e4";}

    
    return(<>
      {showMenu==true?
     ( setShowMenu(showMenu ? false : true)):(null)}
     </> )
  };

  const HideShow = () => {
    setShowMenu1(showMenu1 ? false : true);
    setShowMenu(false);
  };

  function data1(val) {
    return (
      <div
        className=  {showMenu1 ? val.classNani : val.classNani2 }
        style={
          !showMenu1
            ? {
                marginTop: "9.5px",
                marginBottom: "9.5px",
                width: "fit-content"
              }
            : { width: "211px", height: "64px" }
        }
      >
        <div className="DownRow">
          <div>{val.icons}</div>
          <div
            className="DownTitle"
            style={!showMenu1 ? { marginLeft: "0px" } : { marginLeft: "30px" }}
          >
            {showMenu1 ? val.title : null}
          </div>
        </div>
      </div>
    );
  }

  function data(val) {
    return (
      <>
        {val.key == 3 ? (
          <div
            onClick={activeClick1}
          className=  {showMenu1 ? val.classNani : val.classNani2 }
          id={val.id}
            style={
              !showMenu1
                ? {
                    marginTop: "9.5px",
                    marginBottom: "9.5px",
                    width: "fit-content",
                    margin: "0px"
                  }
                : { height: "64px", width: "211px" }
            }
          >
            {val.icons}
            <div
              className="NaveTitle"
              style={
                !showMenu1 ? { marginLeft: "0px" } : { marginLeft: "30px" }
              }
            >
              {" "}
              {showMenu1 ? val.title : null}
            </div>
          </div>
        ) : (
          val.key == 4 ? (
          <div
            onClick={activeClick2}
            id={val.id}
          className=  {showMenu1 ? val.classNani : val.classNani2 }
            style= {!showMenu1
                    ? 
                    { marginTop: "9.5px", marginBottom: "9.5px", width: "fit-content", margin: "0px"}
                    : 
                    { height: "64px", width: "211px" }}>
            {val.icons}
            <div
              className="NaveTitle"
              style={
                !showMenu1 ? { marginLeft: "0px" } : { marginLeft: "30px" }
              }
            >
              {" "}
              {showMenu1 ? val.title : null}
            </div>
          </div>
        ) :

          (<div
           id={val.id}
           onClick={activeClick0}
            className=  {showMenu1 ? val.classNani : val.classNani2 }
            style={
              !showMenu1
                ? {
                    marginTop: "9.5px",
                    marginBottom: "9.5px",
                    width: "fit-content"
                  }
                : { height: "64px", width: "211px" }
            }
          >
            {val.icons}
            {showMenu1 ? val.box : null}
            <div
              className="NaveTitle"
              style={
                !showMenu1 ? { marginLeft: "0px" } : { marginLeft: "30px" }
              }
            >
              {" "}
              {showMenu1 ? val.title : null}
            </div>
          </div>)
        )}

        {val.key == 3 ? (
          showMenu ? (
            <div className="dropDowns" >
              {UserInnerIcons.map((val) => {
                return (
                  <NavLink to={val.path} exact  style={{textDecoration:"none"}}>
                  <span  className="dropDownRow">
 <div>
        <NavLink className="userinnericons" to={val.path} 
 activeClassName="active_class1" style={{textDecoration:"none"}}>

{ val.icons}</NavLink> </div>
                    
                    <NavLink className="dropTitle" to={val.path} activeClassName="active_class" style={{textDecoration:"none"}}>   <div >
                      {showMenu1 ? <span>&nbsp; {val.title}</span>  : null}
                      </div> </NavLink>
                  </span>
                  </NavLink>
                );
              })}
            </div>
          ) : null
        ) : null}

        {val.key == 4 ? (
          showMenu2 ? (
            <div className="dropDowns">
              {ArrayMasterIcon.map((val) => {
                return (
                  <NavLink to={val.path} style={{textDecoration:"none"}}>
                  <span className="dropDownRow">
                    <div>
                    <NavLink className="userinnericons" to={val.path} 
 activeClassName="active_class1" style={{textDecoration:"none"}}>{val.icons}</NavLink></div>
 <NavLink className="dropTitle" to={val.path} activeClassName="active_class" style={{textDecoration:"none"}}>
 
                    <div >
                    {showMenu1 ? <span>&nbsp; {val.title}</span>  : null}
                    </div>

</NavLink>
                  </span>
                  </NavLink>
                
                );
              })}
            </div>
          ) : null
        ) : null}

      </>
    );
  }

  return (
    <>
    <div className="topheadp"></div>
      <div className="LeftNavBarBox">
        <div className="ArrayMiddileTopIcons">
          <div className="TopRow">
            <div onClick={HideShow}> {TopNavBarIcon[0].icons}</div>
            <div
              className="TopTitle"
              style={!showMenu1 ? { margin: "0" } : { marginLeft: "30px" }}
            >
              {showMenu1 ? (
              <span>  {TopNavBarIcon[1].icons}</span>
               ) : null}
            </div>
          </div>

          {ArrayMiddleIcons.map(data)}
        </div>

        <div className="ArrayDownIcons">{ArrayDownIcons.map(data1)}</div>
      </div>
   
    </>
  );
}