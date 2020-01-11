import React , {Component} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateForm from '../common/DateForm';

// const styles = theme => ({
//     hidden: {
//         display: 'none'
//     },
// });

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            userEmail : '',
            userPwd : '',
            userNm : '',
            userPhone : '',
            birthday: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addMemberInfo()
        .then((response) => {
            console.log(response.data);
        })
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
            userPwd : '',
            userNm : '',
            userPhone : '',
            birthday: null
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    birthdayCallback = (callBackDate) => {
        this.setState({
            birthday: callBackDate,
        })
    }

    addMemberInfo = () => {
        const url = '/dr/member/insert';
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        }
        return axios.post(url , {
            userEmail: this.state.userEmail,
            userPwd: this.state.userPwd,
            userNm: this.state.userNm,
            userPhone: this.state.userPhone,
            birthday: this.state.birthday
        } , config);
    }

    render(){
        // const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="#fff000" onClick={this.handleClickOpen}>
                    Sign Up
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To subscribe to this website, please enter your email address here. We will send updates
                                occasionally.
                            </DialogContentText>
                            <TextField autoFocus margin="dense" id="userEmail" name="userEmail" value={this.state.userEmail} label="Email Address" type="email" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userPwd" name="userPwd" value={this.state.userPwd} label="password" type="password" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userNm" name="userNm" value={this.state.userNm} label="name" type="text" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userPhone" name="userPhone" value={this.state.userPhone} label="Phone number" type="text" onChange={this.handleValueChange} fullWidth />
                            <DateForm callBackData={this.birthdayCallback}/>
                        </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleFormSubmit} color="primary">
                        Sign Up
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default SignUpForm;