import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableHeaderColumn } from 'material-ui';
import { TableRowColumn } from 'material-ui';

const row = (x, i, header) => (
    <TableRow key={`tr-${i}`}>
        {header.map((y, k) =>
            <TableRowColumn key={`trc-${k}`}>
                {x[y.prop]}
            </TableRowColumn>)}
    </TableRow>

);
export default ({ data, header }) => {
    return (

        <Table>
            <TableHead>
                <TableRow>
                    {header.map((x, i) =>
                        <TableHeaderColumn key={`thc-${i}`}>
                            {x.name}
                        </TableHeaderColumn>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((x, i) => row(x, i, header))}
            </TableBody>
        </Table>


    );
}




