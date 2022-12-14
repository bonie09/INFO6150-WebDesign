import React from "react";
import "./App.css";
import Today from "./Pages/Today/Today";
import Hourly from "./Pages/Hourly/Hourly";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Today} />
            <Route path="/hourlyForecast/:day" component={Hourly} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
