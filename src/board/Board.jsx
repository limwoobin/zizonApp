import React , { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import BoardList from './BoardList';

const styles = theme => ({
    table: {
        minWidth: 700,
        width: "80%",
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop: 'auto',
      },
      progress: {
        margin: theme.spacing.unit * 2
      },
})
  

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            boards: [
                {'id':1 , 'userEmail':'drogba' , 'fat':'100' , 'test':'test'},
                {'id':2 , 'userEmail':'maluda' , 'fat':'200' , 'test':'test'},
                {'id':3 , 'userEmail':'yakuza' , 'fat':'300' , 'test':'test'},
                {'id':4 , 'userEmail':'sise' , 'fat':'400' , 'test':'test'},
                {'id':5 , 'userEmail':'mangala' , 'fat':'500' , 'test':'test'},
              ],
            //   boards : '',
              searchKeyword: '',
              completed: 0,
        }
    }

    componentDidMount = () => {
        this.timer = setInterval(this.progress, 20);
    }

    componentWillMount = () => {
        clearInterval(this.timer);
      }

    progress = () => {
        const {completed} = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    }
 
    render(){
        const filteredBoards = (data) => {
            data = data.filter((c) => {
                return c.userEmail.indexOf(this.state.searchKeyword) > -1;
            });
            return data.map((c) => {
                return <BoardList key={c.id}  id={c.id}  userEmail={c.userEmail} fat={c.fat} test={c.test} />
            })
        };

        const {classes} = this.props;
        return(
            <div className={classes.table}>
                <br />
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>id</TableCell>
                                <TableCell align="right">작성자</TableCell>
                                <TableCell align="right">fat</TableCell>
                                <TableCell align="right">test</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.boards ?
                                filteredBoards(this.state.boards) : 
                                <TableRow>
                                    <TableCell colSpan="4" align="center">
                                    <CircularProgress className={classes.progress} variant='determinate' value={this.state.completed} />
                                    </TableCell>
                                </TableRow>
                            }
                        </TableBody>
                    </Table>    
                </TableContainer>    
            </div>
        )
    }
}



export default withStyles(styles)(Board);