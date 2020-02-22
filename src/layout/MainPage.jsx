import React, { Component } from 'react';
// import CustomerMain from '../components/CustomerMain';
import { Route } from 'react-router-dom';
import { CustomerMain } from '../pages/page';

class MainPage extends Component {
    

    render() {
        return (
            <div>
              <Route exact path = "/" component={CustomerMain}/>
            </div>
        );
    }
}

export default MainPage;