import React from "react";
import { useState, useContext, useEffect } from "react";
import UserContext from "./usercontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Edituser(props) {
  const [username, setusername] = useState("");
  const [position, setposition] = useState("");
  const [salary, setsalary] = useState("");
  const usercontext = useContext(UserContext);
  const history = useHistory();

  let handlesubmit = (e) => {
    e.preventDefault();
    let userdata = { username, position, salary };
    usercontext.userlist[props.match.params.id - 1] = userdata;
    usercontext.setuserlist([...usercontext.userlist]);
    history.push("/User");
  };

  useEffect(() => {
    let userdata = usercontext.userlist[props.match.params.id - 1];
    setusername(userdata.username);
    setposition(userdata.position);
    setsalary(userdata.salary);
  }, []);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <h3>Edit User</h3>
        <div className="row" style={{ marginTop: "1%" }}>
          <div className="col">
            <label>Name</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                setusername(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label>Position</label>
            <input
              type="text"
              value={position}
              onChange={(e) => {
                setposition(e.target.value);
              }}
            />
          </div>
          <div className="col">
            <label>Salary</label>
            <input
              type="text"
              value={salary}
              onChange={(e) => {
                setsalary(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input type="submit" class="btn btn-primary" value="update" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Edituser;
