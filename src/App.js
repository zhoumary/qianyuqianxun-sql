import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Weather = lazy(() => import("./Weather"));
const Home = lazy(() => import("./Home"));
const Detail = lazy(() => import("./Detail"));
const Footer = lazy(() => import("./Footer"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Weather} />
            <Route path="/Home" component={Home} />
            <Route path="/Detail/:id" component={Detail} />
            <Route path="/Footer" component={Footer} />
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
