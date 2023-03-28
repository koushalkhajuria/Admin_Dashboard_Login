import React, { useEffect, useState } from 'react';

import { Icon, InlineIcon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import bxsEdit from '@iconify-icons/bx/bxs-edit';
import refreshIcon from '@iconify-icons/el/refresh';
import searchIcon from '@iconify-icons/carbon/search';



function Table(){

const [changeButton, setChangeButton] = useState("Save")
const [Search,Setsearch]=useState("")
const [getData,setData]=useState([])
const [postData1,setPostData]=useState("");
const [postData2,setPostData1]=useState("");
const [userid, setUserId] = useState();
const [check,setCheck]=useState();
const [searchData, setSearchData] = useState("");
const [filterSelectContent, setSelectContent] = useState("title")
const [daeta, setDaeta] = useState([])


  // Search Feature

  const SearchTable = (e) => {
    setSearchData(e.target.value);
    const searchFilter = getData.filter((val) => { return (filterSelectContent == "title" ? val.title.toLowerCase().includes(e.target.value.toLowerCase()) : val.id.toString().toLowerCase().includes(e.target.value.toLowerCase())) });
    setDaeta(searchFilter)
    console.log(searchFilter)
  }
  const FilterSelect = (e) => {
    setSelectContent(e.target.value)
  }

  function changeHandler1(event){
    setPostData(event.target.value);}

  function changeHandler2(event){
    setPostData1(event.target.checked);
  
}


   // Given below is Delete Request
   const handleDelete = (e, post) => {
    if (window.confirm("If you click ok this row will be Deleted")) {
      fetch(`http://localhost:8080/usergroup/${post.id}`, { method: "DELETE" })
      .then(() => alert("Deleted SuccessFully"))
    }
    else { console.log(post.id); }
  }


  const handleEdit = (e, post) => {
    setChangeButton("Update")
    setUserId(post.id);
    setPostData(post.groupname);
    setPostData1(post.IsActive);
  }


const updateHandler = (e) => {
  e.preventDefault();
  const obj = JSON.parse(localStorage.getItem("user"))
  const postData = { id: userid, subjectName: postData1, subjectAbb: postData2, createdBy: null, modifiedBy: obj.username };
  fetch("http://localhost:8080/usergroup", {
    method: "PUT",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(postData)
  }).then(result => result.json())
    .then((response) => console.log(response))
  setChangeButton("Save");
}



const submitHandler=(e)=>{
  e.preventDefault();
  const obj = JSON.parse(localStorage.getItem("user"))
  const postData={groupname:postData1,active:postData2,createdby: obj.username, modifiedby: null};
  fetch("http://localhost:8080/usergroup",{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify(postData)
  }).then(result=>result.json())
  .then((response)=>console.log(response))
}


// useEffect(()=>{
//   fetch("http://localhost:8080/usergroup")
//   .then(response=>response.json())
//   .then(data=>setData(data))}
//   ,[]
// )


const resetHandler=()=>{
  setPostData("");
  setPostData1(false);
  setChangeButton("Save")

}
  





  return( <>
    <div className="mainFormK">
<form  onSubmit={submitHandler} >
  <div className="form_K">

<div className="groupname_k">
 <p> Group Name</p> <input className="GroupNameK" id="GroupName" value={postData1} onChange={changeHandler1} type="text" name="GroupName1"/>
  </div>
  <div className="ActiveK">
  <label  for="Active">Active&nbsp;&nbsp;</label>
  <input type="checkbox" className="ActiveChecK"  value={postData2} onChange={changeHandler2} id="Active" name="IsActive" />
  </div>
  
  <div className="btnK">
  <div>
  <button className="resetBtnK" onClick={resetHandler}>Reset</button>
  <button className="saveBtnK"  >{changeButton}</button>
  </div>
  </div>

</div>
</form>  
</div>




<div className="TableHeadK">
<p>Total Record</p>
<select className="GroupSelectK" id="GroupSelect" name="GroupName" value={filterSelectContent} onChange={FilterSelect} >
          <option value="title">--Filter--</option>
          <option value="title">Group Name</option>
          <option value="userId">IsActive</option>
        </select>
<select className="ExactlySelectK" id="ExactlySelect" name="Exactly" >
        <option value="">Exactly</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <Icon className="SearchIconK" icon={searchIcon} />
      <input className="SearchBoxK" type="text" placeholder="Search Here" value={searchData} onChange={SearchTable} name="search" ></input>
      <Icon className="RefreshIconK" icon={refreshIcon} />
     


</div>





    <table className="usergrouptableK">
    <thead>
    <tr>
    <th>GroupName</th>
    <th>IsActive</th>
    <th>CreatedDate</th>
    <th>CreatedBy</th>
    <th>ModifiedDate</th>
    <th>ModifiedBy</th>
    <th>Edit</th>
    <th>Del</th>
    </tr>
    </thead>
    <tbody>
    {(daeta.length === 0)
            ?
            getData.map((posts) =>
              <tr key={posts.id}>
                <td>{posts.groupname}</td>
                <td>{posts.active}</td>
                <td>{posts.createdat}</td>
                <td>{posts.createdby}</td>
                <td>{posts.modifiedat}</td>
                <td>{posts.modifiedby}</td>
                <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
                <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
              </tr>)
            :
            daeta.map((posts) =>
              <tr key={posts.id}>
                <td>{posts.groupname}</td>
                <td>{posts.active}</td>
                <td>{posts.createdat}</td>
                <td>{posts.createdby}</td>
                <td>{posts.modifiedat}</td>
                <td>{posts.modifiedby}</td>
                <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
                <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
              </tr>)}

        </tbody>
        </table>
    </>    )
      }; 

export default Table;