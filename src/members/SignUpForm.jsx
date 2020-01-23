import React , {Component} from 'react';
import {post} from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateForm from '../common/DateForm';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
    hidden: {
        display: 'none'
    },
    button: {
        margin: theme.spacing(1),
      },
});

class SignUpForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false,
            userEmail : '',
            userPwd : '',
            userPwdChk : '',
            userNm : '',
            userPhone : '',
            birthday: new Date(),
            userEmailStatus: 0,
        }
    }

    handleMailAvailableCheck = (e) => {
        e.preventDefault();
        this.verifyEmail(this.state.userEmail)
        console.log(this.state.userEmailStatus);
        if(this.state.userEmailStatus === 1){
            this._userEmailChk(this.state.userEmail)
                .then((response) => {
                console.log('response:' + response);
                if(response.code === 'DRG00'){
                    this.setState({
                        userEmailStatus: 1
                    });
                }else{
                    alert('Alerdy exists email');
                }
            });
        }
    }

    _userEmailChk = (userEmail) => {
        return 'asd';
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.verifyEmail(this.state.userEmail); // 이메일 인증
        this._addMemberInfo()
        .then((response) => {
            console.log(response.data);
        });

        this.setState({
            open: false,
        });
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
            userPwdChk : '',
            userNm : '',
            userPhone : '',
            birthday: null,
            userEmailStatus: 0,
        });
    }

    verifyEmail = (email) => {
        let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if(email.match(regExp) == null || email === null || email === ''){
            alert('Please check your email'); 
            return 'asd';
        }else{
            this.setState({
                userEmailStatus: 1
            });
            return 'SUCCESS';
        }
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

    _addMemberInfo = () => {
        const url = '/dr/member/insert';
        const formData = new FormData();
        formData.append('userEmail' , this.state.userEmail);
        formData.append('userPwd' , this.state.userPwd);
        formData.append('birthday' , this.state.birthday);
        formData.append('userNm' , this.state.userNm);
        formData.append('userPhone' , this.state.userPhone);
        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        return post(url , formData , config);
    }

    render(){
        // const { classes } = this.props;
        const {userEmailStatus} = this.state;
        let emailAvailableCheckButton = null;
        if(userEmailStatus === 0){
            emailAvailableCheckButton =  <Button variant="outlined" color="primary" onClick={this.handleMailAvailableCheck}>Check for duplicate email</Button>
        }else{
            emailAvailableCheckButton =  <Button variant="outlined" disabled>Email is Available</Button>
        }

        let emailInputType = null;
        if(userEmailStatus === 0){
            emailInputType = <TextField autoFocus margin="dense" id="userEmail" name="userEmail" value={this.state.userEmail} label="Email Address" type="email" onChange={this.handleValueChange} fullWidth />
        }else{
            emailInputType = <TextField autoFocus margin="dense" disabled id="userEmail" name="userEmail" value={this.state.userEmail} label="Email Address" type="email" onChange={this.handleValueChange} fullWidth />
        }
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
                            {emailInputType}
                            {/* {this.state.userEmailStatus === 0} */}
                            {emailAvailableCheckButton}&nbsp;&nbsp;&nbsp;
                            <Button variant="outlined" color="primary" onClick={this.handleMailSend}>Send Mail</Button>
                            <TextField autoFocus margin="dense" id="userPwd" name="userPwd" value={this.state.userPwd} label="password" type="password" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userPwdChk" name="userPwdChk" value={this.state.userPwdChk} label="password check" type="password" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userNm" name="userNm" value={this.state.userNm} label="name" type="text" onChange={this.handleValueChange} fullWidth />
                            <TextField autoFocus margin="dense" id="userPhone" name="userPhone" value={this.state.userPhone} label="Phone number" type="text" onChange={this.handleValueChange} fullWidth />
                            <DateForm callBackData={this.birthdayCallback}/>
                        </DialogContent>
                    <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancel
                    </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      
                    <Button onClick={this.handleFormSubmit} color="primary">
                        Sign Up
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(SignUpForm);
// export default SignUpForm;