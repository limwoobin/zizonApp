import React , {Component} from 'react';
import Header from '../layout/Header';
import CustomerMain from '../components/CustomerMain';
import Footer from '../layout/Footer';

class Main extends Component{

  render(){
    return (
        <>
          <Header />
          <CustomerMain />
          <Footer />
        </>
    )
  }
}

export default Main;