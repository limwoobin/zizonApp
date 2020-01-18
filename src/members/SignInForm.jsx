import React , {Component} from 'react';
//import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


// const styles = theme => ({
//     hidden: {
//         display: 'none'
//     },
// });

class SignInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            userEmail : '',
            userPwd : ''
        }
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            open: false,
            userEmail : '',
            userPwd : ''
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render(){
        // const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="#fff000" onClick={this.handleClickOpen}>
                    Sign In
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                    <DialogContent>
                        <DialogContentText></DialogContentText>
                        <TextField autoFocus margin="dense" id="userEmail" name="userEmail" value={this.state.userEmail} label="Email Address" type="email" onChange={this.handleValueChange} fullWidth />
                        <TextField autoFocus margin="dense" id="userPwd" name="userPwd" value={this.state.userPwd} label="password" type="password" onChange={this.handleValueChange} fullWidth />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleFormSubmit} color="primary">
                            Sign In
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignInForm;