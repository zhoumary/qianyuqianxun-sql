import React, { Suspense, lazy } from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Weather = lazy(() => import("./Weather"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Weather} />
            {/* <Route path="/Forecast" component={Forecast} />
            <Route path="/Locations" component={LocationList} />
            <Route path="/Search" component={Search} /> */}
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
