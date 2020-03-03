import React , {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';



class BoardList extends Component{

    render(){
        return (
                <TableRow key={this.props.id}>
                    <TableCell component="th" scope="row">{this.props.id}</TableCell>
                    <TableCell align="right">{this.props.userEmail}</TableCell>
                    <TableCell align="right">{this.props.fat}</TableCell>
                    <TableCell align="right">{this.props.test}</TableCell>
                </TableRow>
        )
    }
}



export default BoardList;