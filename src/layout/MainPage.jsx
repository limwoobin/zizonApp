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
              <Route path = "/category/profile" component={Profile} />
              <Route path = "/category/notice" component={Notice} />
              <Route path = "/category/think" component={Think} />
              <Route path = "/category/board" component={BoardRouter} />
              <Route path = "/category/map" component={Map} />
            </div>
        );
    }
}

export default withStyles(styles)(MainPage);