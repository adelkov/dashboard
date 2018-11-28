import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import withAsyncData from "../../../HOCs/withAsyncData";
import Header from "./Header/Header";
import Body from "./Body/Body";


const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};


function SimpleTable({classes, data, columns}) {

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                   <Header columns={columns} />
                </TableHead>
                <TableBody>
                    <Body columns={columns} data={data} />
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default withAsyncData(
    withStyles(styles)(SimpleTable)
)
