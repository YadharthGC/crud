import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h3>This is Dashboard</h3>
      <Link to="/CreateUser" type="button" class="btn btn-primary">
        Create user
      </Link>
    </div>
  );
}

export default Dashboard;
