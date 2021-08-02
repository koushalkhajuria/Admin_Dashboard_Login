import React from 'react';
import { useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import bxsEdit from '@iconify-icons/bx/bxs-edit';
import refreshIcon from '@iconify-icons/el/refresh';
import searchIcon from '@iconify-icons/carbon/search';
import './userMasterTableStyle.css'
import './userMasterFormStyle.css'
import axios from "axios"

const Tables = () => {
  const obj = JSON.parse(localStorage.getItem("user"));
  const obj1=obj.username;
  const [userState, setuserState] = useState({username: '', password: '', groupname: '', language: '', DateOfJoining: '', localaddress: '', permanentaddress: '', branch: '', createdby: obj1 , email: '',phone: '' })
  const [finalData, setfinalData] = useState([])
  const [finalData1, setfinalData1] = useState([])
  const [filterSelectContent, setSelectContent] = useState("title")
  const [searchData, setSearchData] = useState("");
  const [data, setData] = useState([])
  const [changebutton,setChangeButton]=useState("Save")
  const[pic,setpic]=useState()
  // const profilepic={};

  useEffect(() => {
    fetch('http://localhost:8080/users')
    .then(response => (response.json())).then((res) => { setfinalData(res) })
    .catch(error => (console.log(error)))
  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/usergroup/names')
    .then(response => (response.json())).then((res) => { setfinalData1(res) })
  }, [])

  function userphotos(event){ 
   console.log(event.target.files[0])


    // console.log(profilepic);
  }

//const 


  const resetButton = () => {
    setuserState({ username: '', userGroup: '', dateOfJoining: '', localAddress: '', userLanguage: '', mobileNo: '', password: '', permanentAddress: '', email: '',  branch: '' })
    document.getElementById("passcode").readOnly = false
    document.getElementById("passcode").style.cursor = 'auto'
    document.getElementById("JoiningDate").readOnly = false
    document.getElementById("JoiningDate").style.cursor = 'default'
    setChangeButton("Save")
  }


  // given blow is post request
  const handler = (e) => {
    e.preventDefault()
    // setuserState({ userCode: '', userName: '', userGroup: '', dateOfJoining: '', localAddress: '', userLanguage: '', mobileNo: '', password: '', permanentAddress: '', email: '', userPhoto: '', branch: '' })
    if (userState.branch === "" || userState.branch === "Choose" || userState.groupname === "" || userState.groupname === "Choose" || userState.language === "" || userState.language === "Choose")
     {
      return alert("Please fill all fields and submit again!")
    }
     else {
      
const finalData2 = new FormData()
const config = {
  headers: {
      "Content-Type": "multipart/form-data",
      // "Accept": "application/json",
      // "type": "multipart/form-data"
  }
}
let formData = {
  "username":userState.username,
  "groupname":userState.groupname,
  "password":userState.password,
  "language":userState.language,
  "DateOfJoining": userState.DateOfJoining,
  "localaddress":userState.localaddress,
  "permanentaddress":userState.permanentaddress,
  "branch":userState.branch,
  "createdby":userState.createdby,
  "email":userState.email,
  "phone":parseInt(userState.phone)   
};
finalData2.append("user",new Blob([JSON.stringify(formData)],{
  type: 'application/json'
}));
// finalData2.append("user",formData);

finalData2.append("file", new Blob([pic],{type:'image/png'}) );

// fetch("http://localhost:8080/users", {
//     method:'POST',
    // data:finalData2,
    // headers: {'Content-Type': 'multipart/form-data,boundary=<>'},
    // headers: {
    //   "Content-Type": "multipart/form-data,boundary=<calculated when request is sent>",
    //   "Accept": "application/json",
    //   "type": "formData"
    // },
//        body: finalData2 
// })
axios({
  method: 'post',
  url: 'http://localhost:8080/users',
  data: finalData2,
  config
})
       .then(response => (response.json()))
       .then((res) => { console.log(res) }).catch(error => (console.log(error)))
       console.log(finalData2)
      // fetch('https://jsonplaceholder.typicode.com/posts',
      //  { method: 'POST', 
      //  headers: { 'content-type': 'application/json' }, 
      //  body: JSON.stringify(userState) })
      //  .then(response => (response.json()))
      //  .then((res) => { console.log(res) }).catch(error => (console.log(error)))
       
       
      // document.getElementById("passcode").readOnly = false
      // document.getElementById("passcode").style.cursor = 'auto'
      // document.getElementById("JoiningDate").readOnly = false
      // document.getElementById("JoiningDate").style.cursor = 'default'
    }


    
  }

  // given blow is put request
  const updatehandler=(e)=>{
    e.preventDefault()
    
    fetch('https://jsonplaceholder.typicode.com/posts',
    { method: 'PUT', 
    headers: { 'content-type': 'application/json' }, 
    body: JSON.stringify(userState) })
    .then(response => (response.json()))
    .then((res) => { console.log(res) }).catch(error => (console.log(error)))
    setChangeButton("Save")

  }

  const changeHandler = (e) => {
    e.preventDefault()
    setuserState({ ...userState, [e.target.name]: e.target.value })
  }

  const handleDelete = (e, post) => {
    fetch("", { method: "DELETE" })
      .then(() => alert("Deleted SuccessFully"))
  }

  const handleEdit = (e, post) => {
    document.getElementById("passcode").readOnly = true
    document.getElementById("passcode").style.cursor = 'not-allowed'
    document.getElementById("JoiningDate").readOnly = true
    document.getElementById("JoiningDate").style.cursor = 'not-allowed'
    setChangeButton("Update")
    setuserState({ ...userState, id: post.id })
    setpic("")
    setuserState({
      // userCode: post.title,
      username: post.userId,
      userGroup: 'Manager',
      dateOfJoining: post.title,
      localAddress: post.userId,
      userLanguage: post.id,
      mobileNo: post.id,
      password: post.title,
      permanentAddress: post.userId,
      email: post.userId,
    
      // active:post.completed,
      branch: 'Delhi'
    }
    )

    // fetch("", {
    //   method: "PUT",
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(finalData)
    // })
    //   .then(response => response.json())
    //   .then(data => console.log(post.id))
  }

  const FilterSelect = (e) => {
    setSelectContent(e.target.value)
  }

  const SearchTable = (e) => {
    setSearchData(e.target.value);
    const searchFilter = finalData.filter((val) => { return (filterSelectContent == "title" ? val.title.toLowerCase().includes(e.target.value.toLowerCase()) : val.id.toString().toLowerCase().includes(e.target.value.toLowerCase())) });
    setData(searchFilter)
    console.log(searchFilter)
  }
  function refreshPage() {
    window.location.reload();
  }


  return (<>


    <div className='fullPage'>
      <form className='fullForm' onSubmit={ changebutton=="Save"?  handler :  updatehandler} autoComplete="on">
        <div className='title'>
          Add User
        </div>
        <div className='row1' style={{ display: 'inline-flex' }}>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor='userCode'> <span className="siddhi">User Code</span></label>
            <input className="usermasterinput" type="text" onChange={changeHandler}  name="userCode"  readOnly style={{ cursor: 'not-allowed' }} />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="username" required autoFocus> <span className="siddhi"> User Name</span></label>
            <input className="usermasterinput" type="text" onChange={changeHandler} value={userState.username} name="username" required />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="branch" required><span className="siddhi">Branch</span></label>
            <select className="usermasterselect" onChange={changeHandler} value={userState.branch} name='branch' required>
              <option>Choose</option>
              <option>Delhi</option>
              <option>Gujarat</option>
              <option>Rajasthan</option>
              <option>kerala</option>
              <option>Karnataka</option>
            </select>
          </div>
        </div>

        <div className='row2' style={{ display: 'inline-flex' }}>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="groupname" required><span className="siddhi">User Group</span></label>
            <select className="usermasterselect" onChange={changeHandler} value={userState.groupname} name="groupname" required>
              <option>--Choose--</option>
              <option>{finalData1[0]}</option>
              <option>{finalData1[1]}</option>
              <option>{finalData1[2]}</option>
            </select>
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="phone" required><span className="siddhi">Mobile No</span></label>
            <input className="usermasterinput" type="number" name="phone" onChange={changeHandler} value={userState.phone} required />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="password" required><span className="siddhi">Password</span></label>
            <input className="usermasterinput" type="password" name="password" id='passcode' onChange={changeHandler} value={userState.password} required />
          </div>
        </div>

        <div className='row3' style={{ display: 'inline-flex' }}>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor="DateOfJoining" required><span className="siddhi">Date Of Joining</span></label>
            <input className="usermasterinput" type="date" id='JoiningDate' onChange={changeHandler} value={userState.DateOfJoining} name="DateOfJoining" required />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label htmlFor="localaddress" className="usermasterlable" required>Local Address</label>
            <input className="usermasterinput" type="text" name="localaddress" onChange={changeHandler} value={userState.localaddress} required />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label htmlFor="permanentaddress" className="usermasterlable" required>Permanent Address</label>
            <input className="usermasterinput" type="text" name="permanentaddress" onChange={changeHandler} value={userState.permanentaddress} required />
          </div>
        </div>

        <div className='row4' style={{ display: 'inline-flex' }}>
          <div className="KK" style={{ display: 'grid' }}>
            <label className="usermasterlable" htmlFor='language' required><span className="siddhi">User Language</span></label>
            <select className="usermasterselect" onChange={changeHandler} value={userState.language} name='language' required>
              <option>Choose</option>
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
              <option>Japanese</option>
            </select>
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label htmlFor="email" className="usermasterlable" required><span className="siddhi">Email id</span></label>
            <input className="usermasterinput" type="email" name="email" onChange={changeHandler} value={userState.email} required />
          </div>
          <div className="KK" style={{ display: 'grid' }}>
            <label htmlFor="pic" className="usermasterlable" required><span className="siddhi">User Photo</span> </label>
            <input className="usermasterinput userpic"  type="file" name="pic" onChange={userphotos} value={pic} required />

          </div>
        </div>

        <div className='btnsS1'>

          <input className="resetS1" type="reset" onClick={resetButton} />

          <button className="submitS1" type="submit">{changebutton}</button>

        </div>

      </form>



      {/* ---------------------TABLE--------------------------- */}


      <div className='fullTable'>
        <div className="TableHeadK">
          <p>Total&nbsp;Record</p>
          <select className="GroupSelectK" id="GroupSelect" name="GroupName" value={filterSelectContent} onChange={FilterSelect} >
            <option value="title">--Filter--</option>
            <option value="title">User Name</option>
            <option value="userId">User Group</option>
          </select>
          <select className="ExactlySelectK" id="ExactlySelect" name="Exactly" >
            <option value="">Exactly</option>
            <option value=""></option>
            <option value=""></option>
          </select>
          <Icon className="SearchIconK" icon={searchIcon} />
          <input className="SearchBoxK" type="text" placeholder="Search Here" value={searchData} onChange={SearchTable} name="search" ></input>
          <Icon className="RefreshIconK" onClick={refreshPage} icon={refreshIcon} />
        </div>




        <div className='tableOut'>
          <table className="usergrouptable" >
            <thead>
              <tr>
                <th>User&nbsp;Code</th>
                <th>User&nbsp;Name</th>
                <th>User&nbsp;Group</th>
                <th>Mobile&nbsp;Number</th>
                <th>Email&nbsp;Id</th>
                <th>Branch</th>
                <th>Date&nbsp;Of&nbsp;Joining</th>
                <th>User&nbsp;Language</th>
                <th>Local&nbsp;Address</th>
                <th>Permanent&nbsp;Address</th>
                <th>Created&nbsp;Date</th>
                <th>Created&nbsp;By</th>
                <th>Modified&nbsp;Date</th>
                <th>Modified&nbsp;By</th>
                <th>Edit</th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>

              {(searchData.length === 0) ?
                finalData.map((posts) => <tr key={posts.id}>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.id}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px" }} icon={bxsEdit} /></td>
                  <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px" }} icon={delete24Regular} /></td>
                </tr>) :
                (data.length===0)?<td style={{border:'none',fontSize:"20px",color:"rgb(0,0,0,0.6)"}} colSpan="9">Data&nbsp;not&nbsp;found</td>:
                data.map((posts) => <tr key={posts.id}>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.id}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px" }} icon={bxsEdit} /></td>
                  <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px" }} icon={delete24Regular} /></td>
                </tr>)}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>)
}

export default Tables;