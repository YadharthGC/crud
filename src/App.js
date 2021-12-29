import "./App.css";
import Leftbar from "./leftbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard";
import User from "./user";
import Createuser from "./createuser";
import Edituser from "./edituser";
import { UserProvider } from "./usercontext";

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Leftbar></Leftbar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div className="container-fluid">
            <Switch>
              <UserProvider>
                <Route path="/User" component={User} exact={true}></Route>
                <Route
                  path="/Dashboard"
                  component={Dashboard}
                  exact={true}
                ></Route>
                <Route
                  path="/Createuser"
                  component={Createuser}
                  exact={true}
                ></Route>
                <Route
                  path="/User/edit/:id"
                  component={Edituser}
                  exact={true}
                ></Route>
              </UserProvider>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
