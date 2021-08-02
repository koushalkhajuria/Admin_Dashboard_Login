import react, { useEffect, useState } from "react";
import "./Userlog.css";

function Userlogreport() {
  const [data, setData] = useState([]);

  const handleDelete = (e, post) => {
    fetch("", { method: "DELETE" }).then(() => alert("Deleted SuccessFully"));
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="all">
        <div className="one">
          <form>
            <div className="UserLogReport">
              <h3>User Log Report</h3>
            </div>
            <div className="flex1">
              <div className="usercode">
                <h3>
                  <span className="bhu">User code <span style={{color:"red"}}>*</span> </span>
                </h3>
                <input type="text"></input>
              </div>
              <div className="LogDateFrom">
                <h3>Log Date From</h3>
                <input type="date"></input>
              </div>
              <div className="LogDateTo">
                <h3>Log Date To</h3>
                <input type="date"></input>
              </div>

            </div>
            <div className="flex2">
              <div className="formName">
                <h3>Form Name</h3>
                <input type="text"></input>
              </div>
              <div className="LogType">
                <h3>Log Type</h3>
                <select>
                  <option value="" disabled selected hidden>
                    --Select--
                  </option>
                  <option value="Insert">Insert</option>
                  <option value="Update">Update</option>
                  <option value="Delete">Delete</option>
                </select>
              </div>
              <span className="ResetSearchB">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div className="Reset">
                  <input  type="reset" value="Reset"></input>
                </div>
                <div className="SearchB">
                  <button>Search</button>
                </div>

              </span>

            </div>
          </form>
        </div>
        <div className="two">
          <table className="userlogreporttableb">
            <thead>
              <tr>
                <th style={{borderTopLeftRadius:"8px",borderRight:"1px solid white"}}>User&nbsp;Code</th>
                <th style={{borderRight:"1px solid white"}}>User&nbsp;Name</th>
                <th style={{borderRight:"1px solid white"}}>Form&nbsp;Name</th>
                <th style={{borderRight:"1px solid white"}}>Log&nbsp;Date</th>
                <th style={{borderRight:"1px solid white"}}>Log&nbsp;Type</th>
              </tr>
            </thead>
            <tbody>
              {data.map((posts) => (
                <tr key={posts.id}>
                  <td>{posts.title}</td>
                  <td>{posts.userId}</td>
                  <td>{posts.id}</td>
                  <td>{posts.title}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Userlogreport;