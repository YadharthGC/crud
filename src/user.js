import React from "react";
import { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserContext from "./usercontext";

function User(props) {
  const usercontext = useContext(UserContext);

  let handledelete = (index) => {
    let confirm = window.confirm("Are you sure?");
    if (confirm) {
      usercontext.userlist.splice(index - 1, 1);
      usercontext.setuserlist([...usercontext.userlist]);
    }
  };
  return (
    <div class="card-body">
      <Link to="/CreateUser" type="button" class="btn btn-primary">
        Create user
      </Link>
      <div class="table-responsive">
        <table
          class="table table-bordered"
          id="dataTable"
          width="100%"
          cellspacing="0"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {usercontext.userlist.map((obj, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{obj.username}</td>
                  <td>{obj.position}</td>
                  <td>{obj.salary}</td>
                  <td>
                    <Link
                      to={`/User/edit/${index + 1}`}
                      class="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <button
                      class="btn btn-danger"
                      onClick={() => {
                        handledelete(index + 1);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;
