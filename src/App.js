import React, {Component} from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import SimpleTable from "./Components/SimpleTable/SimpleTable";
import SimpleLineChart from "./Components/SimpleLineChart/SimpleLineChart";


class App extends Component {
    render() {
        return (
            <Router>
                <Dashboard>
                    <Route path="/table" exact component={SimpleTable}/>
                    <Route path="/chart" component={SimpleLineChart}/>
                </Dashboard>
            </Router>
        );
    }
}

export default App;
