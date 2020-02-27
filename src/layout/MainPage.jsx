import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { 
            CustomerMain
           ,Test

        } 
        from '../pages/page';


class MainPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            path : '',
        }
        console.log('MainPage');
        console.log(this.props.routerName);
    }
    render() {
        return (
            <div>
              <Route exact path = "/" component={CustomerMain} />
              <Route path = "/test" component={Test} />
            </div>
        );
    }
}

export default MainPage;