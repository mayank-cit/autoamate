import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import Login from "./component/LogIn/LogIn";
import WorkFlowBuilder from "./containers/WorkFlowBuilder/WorkFlowBuilder";
import WorkFlow from "./component/WorkFlow/WorkFlow";
function App() {
  return (
    <div className="container-fluid">
      <Layout>
        <Switch>
          <Route path="/autoamate" exact component={Login}></Route>
          <Route path="/WorkFlowBuilder" component={WorkFlowBuilder}></Route>
          <Route path="/workFlow" component={WorkFlow}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
