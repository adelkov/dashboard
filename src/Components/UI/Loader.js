import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';


const Loader = ({message}) => {
    return (
        <div>
            {message}
            <LinearProgress color="secondary" />

        </div>
    );
};

export default Loader;
