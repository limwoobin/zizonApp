import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import { 
            CustomerMain
           ,Profile
           ,Notice
           ,Map
           ,Think
           ,BoardRouter
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
              <Route path = "/profile" component={Profile} />
              <Route path = "/notice" component={Notice} />
              <Route path = "/think" component={Think} />
              <Route path = "/board" component={BoardRouter} />
              <Route path = "/map" component={Map} />
            </div>
        );
    }
}

export default withStyles(styles)(MainPage);