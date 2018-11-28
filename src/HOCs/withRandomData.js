import React from 'react';
import Button from "@material-ui/core/Button/Button";

const withRandomData = (WrappedComponent) => {
    class HOC extends React.Component {

        constructor(props, context) {
            super(props, context);
            this.state = {data: []};

            this.generateData = this.generateData.bind(this);

        }

        componentDidMount() {
            this.generateData();
        }

        generateData() {
            this.setState({
                data: this.props.getData()
            })
        }


        render() {
            const {data} = this.state;

            return (
                <div>
                    <WrappedComponent
                        data={data}
                    />
                    <Button variant="outlined" color="primary" fullWidth onClick={this.generateData}>
                        Generate random data!
                    </Button>
                </div>
            );
        }
    }

    return HOC;
};

export default withRandomData;
