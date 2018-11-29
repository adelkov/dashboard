import React, {Component} from 'react';
import Dashboard from "./Dashboard/Dashboard";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import SimpleTable from "./CommonUI/SimpleTable/SimpleTable";
import * as requests from "../Services/data/dataSources"
import SimpleLineChart from "./CommonUI/SimpleLineChart/SimpleLineChart";
import {generateChartData} from '../Services/data/randomData'
import NotFound from "./CommonUI/NotFound/NotFound";
import Home from "./CommonUI/Home/Home";


class App extends Component {
    render() {
        return (
            <Router>
                <Dashboard>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route
                            path="/comments"
                            render={() => <SimpleTable request={requests.comments}/>}
                        />
                        <Route
                            path="/posts"
                            render={() => <SimpleTable request={requests.posts}/>}
                        />
                        <Route
                            path="/chart"
                            render={() => <SimpleLineChart getData={generateChartData}/>}
                        />
                        <Route path='/404' component={NotFound}/>
                        <Redirect from='*' to='/404'/>
                    </Switch>
                </Dashboard>
            </Router>
        );
    }
}

export default App;
