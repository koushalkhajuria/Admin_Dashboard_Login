import React,  {  useEffect, useState } from "react";

import "./Change.css";
import { Icon, InlineIcon } from "@iconify/react";
import whiteCircle from "@iconify-icons/emojione-monotone/white-circle";
import tickSmallOutline from "@iconify-icons/teenyicons/tick-small-outline";

export default function Changepassword() {
const [Opass,Setopass]=useState("");
const [Npass,SetNpass]=useState("");
const [Cpass,SetCpass]=useState("");
// const[oldpassword,Setoldpassword]=useState("");
// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/todos")
//   .then(response=>response.json())
//   .then(data=>Setoldpassword(data))}
//   ,[]
// )
  
  var txt = "";
  // IF VALID
  const valid = (idis, icon, cir_icon, message) => {
    let texts = document.querySelector(`#${idis} .${icon}`);
    texts.style.opacity = 1;
    let texts2 = document.querySelector(`#${idis} .${cir_icon}`);
    texts2.style.background = "rgba(15, 157, 88, 0.75)";
    texts2.style.borderRadius = "50px";
    let texts3 = document.querySelector(`#${idis} .${message}`);
    texts3.style.color = "rgba(15, 157, 88, 0.75)";
  };
  // IF INVALID
  const invalid = (idis, icon, cir_icon, message) => {
    let texts = document.querySelector(`#${idis} .${icon}`);
    texts.style.opacity = 0;
    let texts2 = document.querySelector(`#${idis} .${cir_icon}`);
    texts2.style.background = "white";
    texts2.style.borderRadius = "none";
    texts2.style.color = "rgba(219, 68, 55, 0.75)";
    let texts3 = document.querySelector(`#${idis} .${message}`);
    texts3.style.color = "rgba(219, 68, 55, 0.75)";
  };
  // CHECK CONDITION
  function checknewpassword(e) {
    SetNpass(e.target.value);

    txt = e.target.value

    if (txt.match(/[A-Z]/) != null) {
      valid("capital", "correct", "circleicon", "messagename");
    }
    else { invalid("capital", "correct", "circleicon", "messagename"); }

    if (txt.match(/[0-9]/) != null) {
      valid("number", "correct", "circleicon", "messagename");
    }
    else { invalid("number", "correct", "circleicon", "messagename"); }

    if (txt.match(/[a-z]/) != null) {
      valid("lowercase", "correct", "circleicon", "messagename");
    }
    else { invalid("lowercase", "correct", "circleicon", "messagename"); }

    if (txt.length > 7) {
      valid("more8", "correct", "circleicon", "messagename");
    }
    else { invalid("more8", "correct", "circleicon", "messagename"); }
  }
  // reset input box
  const resetChange = () => {
    Setopass("");
    SetNpass("");
    SetCpass("");
    txt = "";
    window.location.reload(false);
  };
  //change password button
  function hello() {
    const obj= JSON.parse(localStorage.getItem("user"))
    if (Npass===Cpass) {
      
const postData={usercode:(obj.id), oldpass:Opass, newpass: Npass};
fetch("http://localhost:8080/changepass",{
  method:"PUT",
  headers:{'content-type':'application/json'},
  body:JSON.stringify(postData)})
  .then(response=>response.json())
  .then(data=>console.log(data))

     }
    else { alert("Your New Password and Confirm Password is not same") }
  }


  return (
    <>
      <form onSubmit={hello} className="changebox">
        <h1 className="Heading31"> Change password</h1>
        <div className="box32">
          <div className="box31">
            <div className="indiBox">
              <lable className="changeboxname name31">Old Password<span className="star31">*</span></lable>
              <div>
                <input
                  type="text"
                  value={Opass}
                  onChange={(e) => Setopass(e.target.value)}
                  name="oldpassword"
                  required
                />
              </div>
            </div>
            <div className="indiBox1">
              <lable className="changeboxname name32">New Password</lable>
              <div>
                <input
                  type="password"
                  value={Npass}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onChange={checknewpassword}
                  name="newmpassword"
                  required
                />
              </div>
            </div>
            <div className="indiBox2">
              <lable className="changeboxname name33">Confirm Password</lable>
              <div>
                <input
                  type="password"
                  value={Cpass}
                  onChange={(e) => SetCpass(e.target.value)}
                  name="confermpassword"
                  required
                />
              </div>
            </div>
          </div>
          <div className="changepasswordmessage" >
            <div className="changemessagebox" id="more8">
              {" "}
              <Icon className="correct" icon={tickSmallOutline} />
              <Icon className="circleicon" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename">Type more than 8 character</span>
            </div>
            <div className="changemessagebox" id="capital">
              <Icon className="correct" icon={tickSmallOutline} />
              <Icon className="circleicon" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename">Add one upepr case (A-Z)</span>
            </div>
            <div className="changemessagebox" id="lowercase">
              <Icon className="correct" icon={tickSmallOutline} />
              <Icon className="circleicon" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename">Add one lower case (a-z)</span>
            </div>
            <div className="changemessagebox" id="number">
              <Icon className="correct" icon={tickSmallOutline} />
              <Icon className="circleicon" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename">Add one number (0-9)</span>
            </div>
          </div>
        </div>
        <div className="changebuttonbox">
          <span>
            <button className="changebutton" onClick={resetChange} >Reset</button>
          </span>{" "}
          <span>
            <button className=" changepasswordbutton ">
              Change Password
            </button>
          </span>
        </div>
      </form>
    </>
  );
}
