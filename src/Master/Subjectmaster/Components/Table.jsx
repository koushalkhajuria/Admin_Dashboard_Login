import React, { useEffect, useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import delete24Regular from '@iconify-icons/fluent/delete-24-regular';
import bxsEdit from '@iconify-icons/bx/bxs-edit';
import refreshIcon from '@iconify-icons/el/refresh';
import searchIcon from '@iconify-icons/carbon/search';

function Table() {



  const [changeButton, setChangeButton] = useState("Save")
  const [userid, setUserId] = useState()
  const [getData, setData] = useState([])
  const [postData1, setPostData] = useState("");
  const [postData2, setPostData1] = useState("");
  const [searchData, setSearchData] = useState("");
  const [filterSelectContent, setSelectContent] = useState("subjectName")
  const [daeta, setDaeta] = useState([])

  // Search Feature

  const SearchTable = (e) => {
    setSearchData(e.target.value);
    const searchFilter = getData.filter((val) => { return (filterSelectContent == "subjectAbb" ? val.subjectAbb.toString().toLowerCase().includes(e.target.value.toLowerCase()) : val.subjectName.toString().toLowerCase().includes(e.target.value.toString().toLowerCase())) });
    setDaeta(searchFilter)
    console.log(searchFilter)
  }
  const FilterSelect = (e) => {
    setSelectContent(e.target.value)
  }

  //  Input Data Store

  function changeHandler1(event) {
    setPostData(event.target.value);
  }

  function changeHandler2(event) {
    setPostData1(event.target.value);
  }


  // Given below is Delete Request
  const handleDelete = (e, post) => {
    if (window.confirm("If you click ok this row will be Deleted")) {
      fetch(`http://localhost:8080/SubjectMaster/${post.id}`, { method: "DELETE" })
        .then(() => alert("Deleted SuccessFully"))
    }
    else { console.log(post.id); }
  }

  //  Editing Handler
  const handleEdit = (e, post) => {
    setChangeButton("Update")
    setUserId(post.id);
    setPostData(post.subjectName);
    setPostData1(post.subjectAbb);
  }

  // Given below is edit or update Request{PUT REQUEST}

  const updateHandler = (e) => {
    e.preventDefault();
    const obj = JSON.parse(localStorage.getItem("user"))
    const postData = { id: userid, subjectName: postData1, subjectAbb: postData2, createdBy: null, modifiedBy: obj.username };
    fetch("http://localhost:8080/SubjectMaster", {
      method: "PUT",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postData)
    }).then(result => result.json())
      .then((response) => console.log(response))
    setChangeButton("Save");
  }

  // Given below is Post (Save button) Request{POST REQEST}

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = JSON.parse(localStorage.getItem("user"))
    const postData = { subjectName: postData1, subjectAbb: postData2, createdBy: obj.username, modifiedBy: null };
    fetch("http://localhost:8080/SubjectMaster", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postData)
    }).then(result => result.json())
      .then((response) => console.log(response))
  }

  //  Get request Table contents 

  // useEffect(() => {
  //   fetch("http://localhost:8080/SubjectMaster")
  //     .then(response => response.json())
  //     .then(data => setData(data))
  // }
  //   , []
  // )


  const resetHandler = () => {
    setPostData(""); setPostData1("");
    setChangeButton("Save");
  }

  //  Refresh Button Refresh Table
  function refreshPage() {
    window.location.reload();
  }


  return (<>
    <div className="mainFormP">

      {/* Form - Save Update */}

      <form onSubmit={changeButton == "Save" ? submitHandler : updateHandler} >
        <div className="form_P">
          <div>
            <p>Subject name</p> <input className="GroupNameP" id="GroupName" value={postData1} onChange={changeHandler1} type="text" name="GroupName1" />
          </div>
          <div>
            <p>Subject Abbreviation</p> <input className="GroupNameP" id="GroupName" value={postData2} onChange={changeHandler2} type="text" name="GroupName1" />
          </div>
          {/* <div>
  <label for="Active">Active</label>
  <input type="checkbox" className="ActiveChecP"  value={postData2} onChange={changeHandler2} id="Active" name="IsActive" />
  </div> */}

          <div className="btnP">
            <div>
              <button className="resetBtnP" onClick={resetHandler}>Reset</button>
              <button className="saveBtnP"  >{changeButton}</button></div></div>

        </div>
      </form>
    </div>




    <div className="TableHeadP">
      <p>Total Record</p>
      <select className="GroupSelectP" id="GroupSelect" name="GroupName"
        onChange={FilterSelect}>
        <option value="">--Filter--</option>
        <option value="subjectName">Subject name</option>
        <option value="subjectAbb">Subject Abbreviation</option>
      </select>
      <select className="ExactlySelectP" id="ExactlySelect" name="Exactly" >
        <option value="">Exactly</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <Icon className="SearchIconP" icon={searchIcon} />
      <input className="SearchBoxP" type="text" placeholder="Search Here"
        value={searchData} onChange={SearchTable}
        name="search" ></input>
      <Icon onClick={refreshPage} className="RefreshIconP" icon={refreshIcon} />



    </div>





    <table className="usergrouptableP">
      <thead>
        <tr>
          <th>Subject&nbsp;name</th>
          <th>Subject&nbsp;Abbreviation</th>
          <th>Created&nbsp;Date</th>
          <th>Created&nbsp;By</th>
          <th>Modified&nbsp;Date</th>
          <th>Modified&nbsp;By</th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
      </thead>
      <tbody>
        {(daeta.length === 0) ?

          getData.map((posts) =>
            <tr key={posts.id}>
              <td>{posts.subjectName}</td>
              <td>{posts.subjectAbb}</td>
              <td>{posts.createdAt}</td>
              <td>{posts.createdBy}</td>
              <td>{posts.modifiedAt}</td>
              <td>{posts.modifiedBy}</td>
              <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
              <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
            </tr>)
          :
          daeta.map((posts) => <tr key={posts.id}>
            <td>{posts.subjectName}</td>
            <td>{posts.subjectAbb}</td>
            <td>{posts.createdAt}</td>
            <td>{posts.createdBy}</td>
            <td>{posts.modifiedAt}</td>
            <td>{posts.modifiedBy}</td>
            <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
            <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
          </tr>)}

      </tbody>
    </table>
  </>)
};

export default Table;