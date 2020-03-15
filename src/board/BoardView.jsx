import React , {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import CommentList from '../common/component/Comment/CommentList';
import {API} from '../api/Call_API';

class BoardView extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            userEmail: '',
            boardType: '',
            title: '',
            content: '',
            comment: [],
            regDate:'',
        }
    }

    componentDidMount = () => {
        API.GET_BoardData(this.state.id)
        .then(response => {
            console.log(response.data);
            const data = response.data.data;
            this.setState({
                userEmail: data.userEmail,
                boardType: data.boardType,
                title: data.title,
                content: data.content,
                comment: data.comment,
                regDate: data.regDate,
            })
        }).catch(err => {
            console.log(err);
        })
    }
   

    render(){
        const data = this.state;
        return(
            <div>
                <CssBaseline />
                <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#F6F6F6', minHeight:'100vh' , fontSize: '15px' , textAlign: 'left'}}>
                    <div>
                        제목 : {data.title} <br/>
                        작성자 : {data.userEmail} <br/>
                        작성일시 : {data.regDate} <br/>
                        <br /><br />
                        <Divider />
                        내용 : {data.content}
                        <pre>
                            <code>var x = 5;</code>
                        </pre>  
                        <br /><br />
                    </div>
                    <Divider />
                    <CommentList comment={this.state.comment}/>
                </Typography>
                </Container>
            </div>
        )
    }
}

export default BoardView;