import React , {Component} from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
// import { API } from '../api/Call_API';

class BoardList extends Component{

    handleBoardDetail = (id) => {
        console.log('id:' + id);
        // API.GET_BoardData(id)
        // .then(res => {
        //     console.log(res);
        // }).catch(err => {
        //     console.log(err);
        // });
    }

    render(){
        const {id , userEmail , fat , test} = this.props;
        return (
                <TableRow key={id}>
                    <TableCell component="th" scope="row">{id}</TableCell>
                    <TableCell align="right">
                        {/* <Link to={`/board/${id}`} 
                              key={id}
                              onClick={() => {this.handleBoardDetail(id)}}
                        > */}
                        <Link to=
                              {{
                                pathname:`/board/${id}`, 
                                state:{
                                    id:id,
                                    userEmail:userEmail,
                                    fat:fat,
                                    test:test,
                                },
                                key:id,
                                onClick:() => {this.handleBoardDetail(id)}
                                }}>
                            {userEmail}
                        </Link>
                    </TableCell>
                    <TableCell align="right">{fat}</TableCell>
                    <TableCell align="right">{test}</TableCell>
                </TableRow>
        );
    }
}



export default BoardList;