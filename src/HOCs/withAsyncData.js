import React from 'react';
import Loader from "../Components/CommonUI/Loader/Loader";
import {fetchTableData} from "../utils/api";

const withAsyncData = (WrappedComponent) => {
    class HOC extends React.Component {

        constructor(props, context) {
            super(props, context);
            this.state = {
                loading: true,
                error: null,
                data: []
            }
        }

        componentDidMount() {
            fetchTableData(this.props.url)
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
                return (<Loader message={"Loading data..."}/>)
            } else if (error) {
                return (<div>Error</div>)
            } else {
                return (
                    <WrappedComponent
                        data={data}
                    />
                );
            }

        }
    }

    return HOC;
};

export default withAsyncData;
