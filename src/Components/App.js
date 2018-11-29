import React, {Component} from 'react';
import Dashboard from "./Dashboard/Dashboard";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SimpleTable from "./CommonUI/SimpleTable/SimpleTable";
import * as requests from "../Services/data/dataSources"
import SimpleLineChart from "./CommonUI/SimpleLineChart/SimpleLineChart";
import {generateChartData} from '../Services/data/randomData'



class App extends Component {
    render() {
        return (
            <Router>
                <Dashboard>
                    <Route
                        path="/comments"
                        render={() => <SimpleTable request={requests.comments} />}
                    />
                    <Route
                        path="/posts"
                        render={() => <SimpleTable request={requests.posts} />}
                    />
                    <Route
                        path="/chart"
                        render={() => <SimpleLineChart getData={generateChartData}/>}
                    />
                </Dashboard>
            </Router>
        );
    }
}

export default App;
