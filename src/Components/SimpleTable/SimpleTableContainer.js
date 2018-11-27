import React, {Component} from 'react';
import SimpleTable from "./SimpleTable";
import {fetchTableData} from '../../Api'


class SimpleTableContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            loading: true,
            error: null,
            data: []
        }
    }

    componentDidMount() {
        fetchTableData()
            .then(response => {
                this.setState({
                    data: response.data,
                    error: response.error,
                    loading: false
                })
            });
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
