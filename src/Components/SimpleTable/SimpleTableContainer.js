import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";

class SimpleTableContainer extends Component {

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

        let id = 0;
        function createData(name, calories, fat, carbs, protein) {
            id += 1;
            return { id, name, calories, fat, carbs, protein };
        }

        const data = [
            createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            createData('Eclair', 262, 16.0, 24, 6.0),
            createData('Cupcake', 305, 3.7, 67, 4.3),
            createData('Gingerbread', 356, 16.0, 49, 3.9),
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
                <SimpleTable data={data}/>
            );
        }
    }
}

export default SimpleTableContainer;
