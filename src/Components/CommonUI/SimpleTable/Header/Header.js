import React from 'react';
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";

const Header = (columns) => {
    return (
        <TableRow>
            {columns.map(title => (
                <TableCell key={title}>{title.toUpperCase()}</TableCell>
            ))}
        </TableRow>
    );
};

export default Header;
