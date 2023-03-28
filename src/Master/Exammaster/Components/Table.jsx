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
  const [filterSelectContent, setSelectContent] = useState("examName")
  const [daeta, setDaeta] = useState([])

  // Search Feature

  const SearchTable = (e) => {
    setSearchData(e.target.value);
    const searchFilter = getData.filter((val) => { return (filterSelectContent == "examAbb" ? val.examAbb.toString().toLowerCase().includes(e.target.value.toLowerCase()) : val.examName.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()) ) });
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
      fetch(`http://localhost:8080/ExamMaster/${post.id}`, { method: "DELETE" })
        .then(() => alert("Deleted SuccessFully"))
    }
    else { console.log(post.id); }
  }

  //  Editing Handler
  const handleEdit = (e, post) => {
    setChangeButton("Update")
    setUserId(post.id);
    setPostData(post.examName);
    setPostData1(post.examAbb);
  }

  // Given below is edit or update Request{PUT REQUEST}

  const updateHandler = (e) => {
    e.preventDefault();
    const obj = JSON.parse(localStorage.getItem("user"))
    const postData = { id: userid, examName: postData1, examAbb: postData2, createdBy: null, modifiedBy: obj.username };
    fetch("http://localhost:8080/ExamMaster", {
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
    const postData = { examName: postData1, examAbb: postData2, createdBy: obj.username, modifiedBy: null };
    fetch("http://localhost:8080/ExamMaster", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(postData)
    }).then(result => result.json())
      .then((response) => console.log(response))
  }

  //  Get request Table contents 

  // useEffect(() => {
  //   fetch("http://localhost:8080/ExamMaster")
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


  return (
    <>

      {/* Form - Save Update */}

      <div className="mainForm34">
        <form onSubmit={changeButton == "Save" ? submitHandler : updateHandler} >
          <div className="form_34">
            <div>
              <p> Exam Name</p> <input className="GroupName34" id="GroupName" value={postData1} onChange={changeHandler1} type="text" name="GroupName1" />
            </div>
            <div>
              <p> Exam Abbreviation </p> <input className="GroupName34" id="GroupName" value={postData2} onChange={changeHandler2} type="text" name="GroupName1" />
            </div>

            <div className="btn34">
              <div>
                <button className="resetBtn34" onClick={resetHandler}>Reset</button>
                <button className="saveBtn34"  >{changeButton}</button>
              </div>
            </div>
          </div>
        </form>
      </div>


      {/* Table Heading - Filter Search Refresh */}

      <div className="TableHead34">
        <p>Total Record</p>
        <select className="GroupSelect34" id="GroupSelect" name="GroupName"  onChange={FilterSelect} >
          <option value="">--Filter--</option>
          <option value="examName">Exam Name</option>
          <option value="examAbb">Exam Abbreviation</option>
        </select>
        <select className="ExactlySelect34" id="ExactlySelect" name="Exactly" >
          <option value="">Exactly</option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <Icon className="SearchIcon34" icon={searchIcon} />
        <input className="SearchBox34" type="text" placeholder="Search Here" value={searchData} onChange={SearchTable} name="search" ></input>
        <Icon onClick={refreshPage} className="RefreshIcon34" icon={refreshIcon} />
      </div>


      {/* Table Backend Data - Edit Delete */}

      <table className="usergrouptable34">
        <thead>
          <tr>
            <th>Exam&nbsp;Name</th>
            <th>Exam&nbsp;Abbreviation</th>
            <th>Created&nbsp;Date</th>
            <th>Created&nbsp;By</th>
            <th>Modified&nbsp;Date</th>
            <th>Modified&nbsp;By</th>
            <th>Edit</th>
            <th>Del</th>
          </tr>
        </thead>
        <tbody>
          {(daeta.length === 0)
            ?
            getData.map((posts) =>
              <tr key={posts.id}>
                <td>{posts.examName}</td>
                <td>{posts.examAbb}</td>
                <td>{posts.createdAt}</td>
                <td>{posts.createdBy}</td>
                <td>{posts.modifiedAt}</td>
                <td>{posts.modifiedBy}</td>
                <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
                <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
              </tr>)
            :
            daeta.map((posts) =>
              <tr key={posts.id}>
                <td>{posts.examName}</td>
                <td>{posts.examAbb}</td>
                <td>{posts.createdAt}</td>
                <td>{posts.createdBy}</td>
                <td>{posts.modifiedAt}</td>
                <td>{posts.modifiedBy}</td>
                <td><Icon onClick={(e) => { handleEdit(e, posts) }} style={{ color: "#0F9D58", fontSize: "26px", cursor: "pointer" }} icon={bxsEdit} /></td>
                <td><Icon onClick={(e) => { handleDelete(e, posts) }} style={{ color: "#DB4437", fontSize: "26px", cursor: "pointer" }} icon={delete24Regular} /></td>
              </tr>)}

        </tbody>
      </table>
    </>
  )
};

export default Table;