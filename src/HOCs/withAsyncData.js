import React from 'react';
import Loader from "../Components/CommonUI/Loader/Loader";
import {fetchTableData} from "../Services/api/api";
import Typography from "@material-ui/core/Typography/Typography";

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

        async componentDidMount() {

            const response = await fetchTableData(this.props.request.url);
            this.setState({
                data: response.data,
                error: response.error,
                loading: false
            })
        }

        render() {
            console.log(this.props)
            const {loading, error, data} = this.state;
            const {title, columns} = this.props.request;

            if (loading) {
                return (<Loader message={"Loading data..."}/>)
            } else if (error) {
                return (<div>Error: {error.message}</div>)
            } else {
                return (
                    <>
                        <Typography variant="h4" gutterBottom component="h2">
                            {title}
                        </Typography>
                        <WrappedComponent
                            columns={columns}
                            data={data}
                        />
                    </>
                );
            }
        }
    }

    return HOC;
};

export default withAsyncData;
