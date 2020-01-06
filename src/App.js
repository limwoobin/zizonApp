import React, {Component, Fragment} from 'react';
import './App.scss';
import {hot} from 'react-hot-loader';
import CustomerMain from './components/CustomerMain';
import Footer from './layout/Footer';
  
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
 
    }
  }

  render(){
    return(
      <Fragment>
        <CustomerMain />
        <Footer />
      </Fragment>
    );
  }
}

export default hot(module)(App);