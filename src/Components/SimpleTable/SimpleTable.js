import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

    const header = data[0] && Object.keys(data[0]).map(itemName => {
            if (itemName !== 'id') {
                return (
                    <TableCell numeric={itemName !== "name"} key={itemName}>
                        {itemName}
                    </TableCell>
                )
            }
        }
    );

    const rows = data.map(record => {
        return (
            <TableRow key={record.id}>
                {
                    Object.keys(record).map(item => {
                            if (item !== 'id') {
                                return (
                                    <TableCell numeric={item !== "name"} component="th" scope="row" key={record[item]}>
                                        {record[item]}
                                    </TableCell>
                                )
                            }
                        }
                    )
                }
            </TableRow>
        );
    });


    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {header}
                    </TableRow>
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

export default withStyles(styles)(SimpleTable);
