import React , {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import {Func} from '../../common';

class Comment extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render(){
        const {image , userEmail , content , modiDate} = this.props;
        return (
            <div>
                {image}{userEmail} : {content} &nbsp; {Func.DateFormat(modiDate)} <br/>
                {/* &nbsp;&nbsp;&nbsp;&nbsp;  대댓글 */}
                <Divider />
            </div>
        )
    }
}



export default Comment;