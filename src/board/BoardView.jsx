import React , {Component} from 'react';
import {API} from '../api/Call_API';

class BoardView extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            boardEmail: '',
            title: '',
            content: '',
            comment: [],
            regDate:'',
        }
    }

    componentDidMount = () => {
        API.GET_BoardData(this.state.id)
        .then((res) => {
            let result = res.data;
            if(result.code === 'DR00'){
                console.log(result.data);
                this.setState({
                    boardEmail:result.data.userEmail,
                    title:result.data.title,
                    content:result.data.content,
                    regDate:result.data.regDate
                })
            }else{
                console.log(result.message);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    componentWillMount = () => {

    }

    

    render(){
        return(
            <div>
                id: {this.state.id}  <br/>
                boardEmail : {this.state.boardEmail} <br/>
                title : {this.state.title} <br/>
                content : {this.state.content} <br/>
                regDate : {this.state.regDate}
            </div>
        )
    }
}

export default BoardView;