import React , {Component} from 'react';
import {post} from 'axios';
//import axios from 'axios';
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
    }
});

class CustomerAdd extends Component{
    // static defaultProps = {

    // }    -> class 형에서 쓰이는 디폴트
    constructor(props){
        super(props);
        this.state = {
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        }
        // this.handleFormSubmit = this.handleFormSubmit.bind(this);
        // this.handleFileChange = this.handleFileChange.bind(this);
        // this.handleValueChange = this.handleValueChange.bind(this);
        // this.addCustomer = this.addCustomer.bind(this);
        // this.handleClickOpen = this.handleClickOpen.bind(this);
        // this.handleClose = this.handleClose.bind(this);
        // 함수를 화살표 함수로 정의했으면 바인딩안해줘도 된다
        // 바인딩을 해주는 이유는 일반함수로 선언시 버튼클릭과정에서 this의 연결이 끊어지기 때문
        // 일반 함수는 호출된곳을 this 로 참조하기 때문
    }    

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.addCustomer()
        .then((response) => {
            console.log(response.data);
            this.props.stateRefresh();
        })

        // 추가버튼 호출 후 고객 추가 양식을 비운 뒤 페이지를 새로고참
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0],
            fileName: e.target.value
        });
    }     

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer = () => {
        const url = '/dr/customer/insert';
        const formData = new FormData();
        formData.append('image' , this.state.file);
        formData.append('name' , this.state.userName);
        formData.append('birthday' , this.state.birthday);
        formData.append('gender' , this.state.gender);
        formData.append('job' , this.state.job);
        const config = {
            headers: {
                //'content-type':'multipart/form-data'
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            }
        };
        return post(url , formData , config);
        // return axios.post(url , {
        //     //headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
        //     headers:{'content-type':'multipart/form-data'},
        //     image: this.state.file,
        //     name: this.state.userName,
        //     birthday: this.state.birthday,
        //     gender: this.state.gender,
        //     job: this.state.job
        // });
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }

    handleClose = () => {
        this.setState({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: '',
            open: false
        });
    }

    render(){
        const { classes } = this.props;
        return (
            // <form onSubmit={this.handleFormSubmit}>
            // <h1>고객 추가</h1>
            // 프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br/>
            // 이름: <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
            // 생년월일: <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
            // 성별: <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
            // 직업: <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
            // <button type="submit">추가하기</button>
            // </form>
            <div>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
            고객 추가하기
            </Button>
            <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle>고객 추가</DialogTitle>
                <DialogContent>
                    <input className={classes.hidden} accept="image/*" id="raised-button-file" type="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} />
                    <label htmlFor="raised-button-file">
                        <Button variant="contained" color="primary" component="span" name="file">
                            {this.state.fileName === ''? "프로필 이미지 선택" : this.state.fileName}
                        </Button>
                    </label><br/>
                    <TextField label="이름" type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                    <TextField label="생년월일" type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                    <TextField label="성별" type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                    <TextField label="직업" type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={this.handleFormSubmit}>추가</Button>
                    <Button variant="outlined" color="primary" onClick={this.handleClose}>닫기</Button>
                </DialogActions>
            </Dialog>
            </div>
        );
    }
}

// CustomerAdd.defaultProps = {

// } -> 함수형에서 쓰이는 방식(hooks)

export default withStyles(styles)(CustomerAdd);