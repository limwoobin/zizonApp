import React , {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    constructor(props){
        super(props);

        this.state = {
            comment: this.props.comment
        }
    }


    handleRenderComment = () => {
        
    }

    render(){
        return (
            <div>
                <Comment />
            </div>
        )
    }
}

export default CommentList;