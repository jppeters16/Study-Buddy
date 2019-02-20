import React, { Component } from "react";
import { Provider } from "./MyContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetQuestions from "./pages/GetQuestions";
import Test from "./pages/Test";
import NoMatch from "./pages/NoMatch";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";


class App extends Component {
  render() {
    return (
      <Provider>
      <Router>
        <div>
          <Switch>

            <Route exact path="/" component={Homepage} />
            <Route exact path="/getQuestions" component={GetQuestions} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/register" component={Register} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
