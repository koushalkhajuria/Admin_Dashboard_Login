import  React, { useEffect, useState } from "react";
import "./Reset.css";
import { Icon, InlineIcon } from "@iconify/react";
import whiteCircle from "@iconify-icons/emojione-monotone/white-circle";
import tickSmallOutline from "@iconify-icons/teenyicons/tick-small-outline";


export default function Resetpassword() {
  const [oldpassword, setoldpassword] = useState("");
  const [newmpassword, setnewmpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  var txt="";
  // IF VALID
  const valid = (idis, icon, cir_icon, message) => {
    let texts = document.querySelector(`#${idis} .${icon}`);
    texts.style.opacity = 1;
    let texts2=document.querySelector(`#${idis} .${cir_icon}`);
    texts2.style.background="rgba(15, 157, 88, 0.75)";
    texts2.style.borderRadius="50px";
    let texts3=document.querySelector(`#${idis} .${ message}`);
    texts3.style.color="rgba(15, 157, 88, 0.75)";
  };
  // IF INVALID
  const invalid = (idis, icon, cir_icon, message) => {
    let texts = document.querySelector(`#${idis} .${icon}`);
    texts.style.opacity = 0;
    let texts2=document.querySelector(`#${idis} .${cir_icon}`);
    texts2.style.background="white";
    texts2.style.borderRadius="none";
    texts2.style.color="rgba(219, 68, 55, 0.75)";
    let texts3=document.querySelector(`#${idis} .${ message}`);
    texts3.style.color="rgba(219, 68, 55, 0.75)";
  };
  // CHECK CONDITION
  function checknewpassword(e) {
    setnewmpassword(e.target.value);

     txt = e.target.value

    console.log(newmpassword);
    if (txt.match(/[A-Z]/) != null) {
      valid("capital41", "correct41", "circleicon41", "messagename41");}
    else
    {invalid("capital41", "correct41", "circleicon41", "messagename41");}

    if (txt.match(/[0-9]/) != null) {
      valid("number41", "correct41", "circleicon41", "messagename41");}
    else
    {invalid("number41", "correct41", "circleicon41", "messagename41");}

    if (txt.match(/[a-z]/) != null) {
      valid("lowercase41", "correct41", "circleicon41", "messagename41");}
    else
    {invalid("lowercase41", "correct41", "circleicon41", "messagename41");}

    if (txt.length > 7) {
      valid("more841", "correct41", "circleicon41", "messagename41");}
    else
    {invalid("more841", "correct41", "circleicon41", "messagename41");}
  }
  // reset input box
  // const resetChange = () => {
  //   setoldpassword("");
  //   setnewmpassword("");
  //   setconfirmpassword("");
  //   txt="";
  //   window.location.reload(false);
  // };
//change password button
function hello(){
  let postData={usercode:oldpassword, newpas:newmpassword}
  if(newmpassword==confirmpassword)
  {
  fetch("http://localhost:8080/ClassGropuMaster",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(postData)
  }).then(result=>result.json())
  .then((response)=>console.log(response))
}
  else {alert("Your New Password and Confirm Password is not same")}
  }
  

  return (
    <>
      <form onSubmit={hello} className="changebox41">
        <h1 className="Heading3141"> Reset password</h1>
        <div className="box3241">
          <div className="box3141">
            <div className="indiBox41">
              <lable className="changeboxname41 name3141">User Code<span className="star3141">*</span></lable>
              <div>
                <input
                  type="text"
                  value={oldpassword}
                  onChange={(e) => setoldpassword(e.target.value)}
                  name="oldpassword"
                  required
                />
              </div>
            </div>
            <div className="indiBox411">
              <lable className="changeboxname41 name3241">New Password</lable>
              <div>
                <input
                  type="password"
                  value={newmpassword}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onChange={checknewpassword}
                  name="newmpassword"
                  required
                />
              </div>
            </div>
            <div className="indiBox412">
              <lable className="changeboxname41 name3341">Confirm Password</lable>
              <div>
                <input
                  type="password"
                  value={confirmpassword}
                  onChange={(e) => setconfirmpassword(e.target.value)}
                  name="confermpassword"
                  required
                />
              </div>
            </div>
          </div>
          <div className="changepasswordmessage41" >
            <div className="changemessagebox41" id="more841">
              {" "}
              <Icon className="correct41"  icon={tickSmallOutline} />
              <Icon className="circleicon41" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename41">Type more than 8 character</span>
            </div>
            <div className="changemessagebox41" id="capital41">
              <Icon className="correct41" icon={tickSmallOutline} />
              <Icon className="circleicon41" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename41">Add one upper case (A-Z)</span>
            </div>
            <div className="changemessagebox41" id="lowercase41">
              <Icon className="correct41" icon={tickSmallOutline} />
              <Icon className="circleicon41" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename41">Add one lower case (a-z)</span>
            </div>
            <div className="changemessagebox41" id="number41">
              <Icon className="correct41" icon={tickSmallOutline} />
              <Icon className="circleicon41" style={{background:"black",borderRadius:"10px"}} icon={whiteCircle} />
              <span className="messagename41">Add one number (0-9)</span>
            </div>
          </div>
        </div>
        <div className="changebuttonbox41">
          <span>
            {/* <button className="changebutton"  onClick={resetChange} >Reset</button> */}
          </span>{" "}
          <span>
            <button className="changebutton41 changepasswordbutton41 ">
              Reset Password
            </button>
          </span>
        </div>
      </form>
    </>
  );
}
