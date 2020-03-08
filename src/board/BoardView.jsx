import React , {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Comment from '../common/component/Comment';

class BoardView extends Component{
    constructor(props){
        super(props);
        let data = this.props.location.state;
        this.state = {
            id: data.id,
            userEmail: data.userEmail,
            fat: data.fat,
            test: data.test,
            // id:this.props.match.params.id,
            // boardEmail: '',
            // title: '',
            // content: '',
            // comment: [],
            // regDate:'',
        }
    }

   

    render(){
        const data = this.state;
        return(
            <div>
                <CssBaseline />
                <Container maxWidth="md">
                <Typography component="div" style={{ backgroundColor: '#F6F6F6', minHeight:'100vh' , fontSize: '15px' , textAlign: 'left'}}>
                    <div>
                        <div style={{textAlign: 'left'}}>id: {data.id}</div>
                        <div style={{textAlign: 'center'}}>userEmail : {data.userEmail} </div>
                    </div>
                    fat : {data.fat} <br/>
                    test : {data.test} <br/>
                    
                    <pre>
                        <code>var x = 5;</code>
                    </pre>  
                    <Divider />
                    <Comment />
                </Typography>
                </Container>
            </div>
        )
    }
}

export default BoardView;