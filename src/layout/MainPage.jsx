import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { 
            CustomerMain
           ,Profile
        } 
        from '../pages/page';

const styles = theme => ({
    root: {
        width: "100%",
        minHeight: 200
    }
});

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <Route exact path = "/" component={CustomerMain} />
              <Route path = "/Profile" component={Profile} />
            </div>
        );
    }
}

export default withStyles(styles)(MainPage);