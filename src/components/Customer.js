import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



class Custmoer extends React.Component{
    render(){
        return (
            <div>
                <TableRow>
                    <TableCell><img src={this.props.image} alt="profile" /></TableCell>
                    <TableCell><h2>{this.props.name}({this.props.id})</h2></TableCell>
                    <TableCell><p>{this.props.birthday}</p></TableCell>
                    <TableCell><p>{this.props.gender}</p></TableCell>
                    <TableCell><p>{this.props.job}</p></TableCell>
                </TableRow>
            </div>
        )
    }
}

export default Custmoer;