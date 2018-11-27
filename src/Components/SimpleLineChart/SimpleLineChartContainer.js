import React, {Component} from 'react';
import SimpleLineChart from "./SimpleLineChart";

class SimpleLineChartContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state={
            loading: true,
            error: null,
            data: []
        }
    }

    componentDidMount() {
        // ToDo: fetch data from API

        const data = [
            { name: 'Mon', Visits: 2200, Orders: 3400 },
            { name: 'Tue', Visits: 1280, Orders: 2398 },
            { name: 'Wed', Visits: 5000, Orders: 4300 },
            { name: 'Thu', Visits: 4780, Orders: 2908 },
            { name: 'Fri', Visits: 5890, Orders: 4800 },
            { name: 'Sat', Visits: 4390, Orders: 3800 },
            { name: 'Sun', Visits: 4490, Orders: 4300 },
        ];

        this.setState({data, loading: false})
    }
    render() {
        const {loading, error, data} = this.state;

        if (loading) {
            return (<div>Loading...</div>)
        } else if (error) {
            return (<div>Error</div>)
        } else {
            return (
                <SimpleLineChart data={data}/>
            );
        }
    }
}

export default SimpleLineChartContainer;
