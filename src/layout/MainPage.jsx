import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CustomerMain } from '../pages/page';
import { API } from '../api/Call_API';

class MainPage extends Component {
    // componentDidMount(){
    //     console.log('씨발 로드안되냐??');
    //     return API.GET_MainPage();
    // }

    render() {
        return (
            <div>
              <Route exact path = "/" component={CustomerMain}/>
            </div>
        );
    }
}

export default MainPage;