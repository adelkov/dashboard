import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withAsyncData from "../../../HOCs/withAsyncData";


const styles = {
    root: {
        width: '100%',
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
};


function SimpleTable({classes, data}) {

    const header = (
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Comment body</TableCell>
        </TableRow>
    );


    const rows = data.map(n => {
        return (
            <TableRow key={n.id}>
                <TableCell component="th" scope="row">
                    {n.name}
                </TableCell>
                <TableCell>{n.email}</TableCell>
                <TableCell>{n.body}</TableCell>
            </TableRow>
        );
    });


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    {header}
                </TableHead>
                <TableBody>
                    {rows}
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
