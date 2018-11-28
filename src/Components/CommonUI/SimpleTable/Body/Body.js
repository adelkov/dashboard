import React from 'react';
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

const Body = ({data, columns}) =>
     (data.map(record => {
            return (
                <TableRow key={record.id}>
                    {columns.map(item => (
                        <TableCell key={item}>{record[item]}</TableCell>
                    ))}
                </TableRow>
            );
        })
    );
;

export default Body;
