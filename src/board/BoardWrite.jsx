import React , {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import {Redirect} from 'react-router-dom';


const styles = theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '200px',
        },
      },
      textField:{
        width: '50%',
        // align: 'center',
      }

});

class BoardWrite extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            userEmail: '',
        }
    }

    componentDidMount = () => {
        
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    render(){
        const { classes } = this.props;
        return (
            <div classes={classes.root}>
                <CssBaseline />
                <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#F6F6F6' , minHeight:'100%' , fontSize: '15px' , textAlign: 'left'}}>
                    {this.props.userEmail} ? 
                    <div>
                        제목 : <TextField className={classes.textField} label="title" variant="outlined" /> <br/>
                        작성자 : {this.state.userEmail}<br/>
                        <br /><br />
                        <Divider />
                        내용 : <TextField className={classes.textField} label="content" variant="outlined" /> <br/> 
                        <br /><br />
                    </div>
                    <Button variant="contained" color="primary">작성</Button>
                    <Divider />
                     : <Redirect to='/login' />
                    {/* <div>
                        제목 : <TextField className={classes.textField} label="title" variant="outlined" /> <br/>
                        작성자 : {this.state.userEmail}<br/>
                        <br /><br />
                        <Divider />
                        내용 : <TextField className={classes.textField} label="content" variant="outlined" /> <br/> 
                        <br /><br />
                    </div>
                    <Button variant="contained" color="primary">작성</Button>
                    <Divider /> */}
                </Typography>
                </Container>
            </div>
        )
    }
}

export default withStyles(styles)(BoardWrite);