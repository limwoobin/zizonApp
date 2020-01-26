import React , {Component} from 'react';
// import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {setVerifyEmail} from '../common/common';
import {LOGIN} from '../api/auth';

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
        let emailCheck = setVerifyEmail(this.state.userEmail);
        if(emailCheck === 'FAIL') return;
        if(this.state.userPwd === null){
            alert('Please Input in your password');
            return;
        }   
        this._Login()
        .then((response) => {
            console.log(response.data);
        })
        .catch((response) => {
            console.log(response);
        });
    }

    _Login = () => {
        const formData = new FormData();
        formData.append('userEmail' , this.state.userEmail);
        formData.append('userPwd' , this.state.userPwd);
        return LOGIN(formData);
    }

    render(){
        return(
            <div>
                <Button variant="contained" color="default" onClick={this.handleClickOpen}>
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