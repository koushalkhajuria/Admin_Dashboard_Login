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
  const [filterSelectContent, setSelectContent] = useState("mockTestName")
  const [daeta, setDaeta] = useState([])

  // Search Feature

  const SearchTable = (e) => {
    setSearchData(e.target.value);
    const searchFilter = getData.filter((val) => { return (filterSelectContent == "lastYearPaper" ? val.lastYearPaper.toString().toLowerCase().includes(e.target.value.toLowerCase()) : val.mockTestName.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) ) });
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
      fetch(`http://localhost:8080/TestMaster/${post.id}`, { method: "DELETE" })
        .then(() => alert("Deleted SuccessFully"))
    }
    else { console.log(post.id); }
  }

  //  Editing Handler
  const handleEdit = (e, post) => {
    setChangeButton("Update")
    setUserId(post.id);
    setPostData(post.mockTestName);
    setPostData1(post.lastYearPaper);
  }

  // Given below is edit or update Request{PUT REQUEST}

  const updateHandler = (e) => {
    e.preventDefault();
    const obj = JSON.parse(localStorage.getItem("user"))
    const postData = { id: userid, mockTestName: postData1, lastYearPaper: postData2, createdBy: null, modifiedBy: obj.username };
    fetch("http://localhost:8080/TestMaster", {
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
    const postData = { mockTestName: postData1, lastYearPaper: postData2, createdBy: obj.username, modifiedBy: null };
    fetch("http://localhost:8080/TestMaster", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postData)
    }).then(result => result.json())
      .then((response) => console.log(response))
  }

  //  Get request Table contents 

  // useEffect(() => {
  //   fetch("http://localhost:8080/TestMaster")
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
    <div className="mainFormB">

      {/* Form - Save Update */}

      <form onSubmit={changeButton == "Save" ? submitHandler : updateHandler} >
        <div className="form_B">
          <div>
            <p> Mock Test Name</p> <input className="GroupNameB" id="GroupName" value={postData1} onChange={changeHandler1} type="text" name="GroupName1" />
          </div>
          <div>
            <p> Last Year Paper</p> <input className="GroupNameB" id="GroupName" value={postData2} onChange={changeHandler2} type="text" name="GroupName1" />
          </div>
          {/* <div>
  <label for="Active">Active</label>
  <input type="checkbox" className="ActiveChecB"  value={postData2} onChange={changeHandler2} id="Active" name="IsActive" />
  </div> */}

          <div className="btnB">
            <div>
              <button className="resetBtnB" onClick={resetHandler}>Reset</button>
              <button className="saveBtnB"  >{changeButton}</button></div></div>

        </div>
      </form>
    </div>




    <div className="TableHeadB">
      <p>Total Record</p>
      <select className="GroupSelectB" id="GroupSelect" name="GroupName" 
        onChange={FilterSelect}
      >
        <option value="">--Filter--</option>
        <option value="mockTestName">Mock Test Name</option>
        <option value="lastYearPaper">Last Year Paper</option>
      </select>
      <select className="ExactlySelectB" id="ExactlySelect" name="Exactly" >
        <option value="">Exactly</option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <Icon className="SearchIconB" icon={searchIcon} />
      <input className="SearchBoxB" type="text" placeholder="Search Here"
        value={searchData} onChange={SearchTable}
        name="search" ></input>
      <Icon onClick={refreshPage} className="RefreshIconB" icon={refreshIcon} />



    </div>





    <table className="usergrouptableB">
      <thead>
        <tr>
          <th>Mock&nbsp;Test&nbsp;Name</th>
          <th>Last&nbsp;Year&nbsp;Paper</th>
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
              <td>{posts.mockTestName}</td>
              <td>{posts.lastYearPaper}</td>
              <td>{posts.createdAt}</td>
              <td>{posts.createdBy}</td>
              <td>{posts.modifiedAt}</td>
              <td>{posts.modifiedBy}</td>
              <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
              <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
            </tr>)
          :
          daeta.map((posts) => <tr key={posts.id}>
              <td>{posts.mockTestName}</td>
              <td>{posts.lastYearPaper}</td>
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