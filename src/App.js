import React, {Component} from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SimpleLineChart from "./Components/SimpleLineChart/SimpleLineChart";
import SimpleTableContainer from "./Components/SimpleTable/SimpleTableContainer";


class App extends Component {
    render() {
        return (
            <Router>
                <Dashboard>
                    <Route path="/table" exact component={SimpleTableContainer}/>
                    <Route path="/chart" component={SimpleLineChart}/>
                </Dashboard>
            </Router>
        );
    }
}

export default App;
