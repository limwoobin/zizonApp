import React , {Component} from 'react';
import {post} from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
    hidden: {
        display: 'none'
    },
});

class LoginForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            userId : '',
            userPwd : ''
        }
    }

    handleClickOpen = (e) => {
        this.setState({
            open: true
        });
    }

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Button variant="contained" color="#fff000" onClick={this.handleClickOpen}>
                    로그인
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>고객 추가</DialogTitle>
                    <DialogContent>
                        <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                        <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>로그인</Button>
                        <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>회원가입</Button>
                        <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default LoginForm;