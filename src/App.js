import React, {Component} from 'react';
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
      <>
        <CustomerMain />
        <Footer />
      </>
    );
  }
}

export default hot(module)(App);
// export default App;