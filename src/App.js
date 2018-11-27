import React, {Component} from 'react';
import Dashboard from "./Components/Dashboard/Dashboard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SimpleTableContainer from "./Components/SimpleTable/SimpleTableContainer";
import SimpleLineChartContainer from "./Components/SimpleLineChart/SimpleLineChartContainer";


class App extends Component {
    render() {
        return (
            <Router>
                <Dashboard>
                    <Route path="/table" exact component={SimpleTableContainer}/>
                    <Route path="/chart" component={SimpleLineChartContainer}/>
                </Dashboard>
            </Router>
        );
    }
}

export default App;
