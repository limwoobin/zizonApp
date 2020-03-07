import React , {Component} from 'react';
import Header from '../layout/Header';
import MainPage from '../layout/MainPage';
import Footer from '../layout/Footer';
import { BrowserRouter } from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      path: '/',
    };
  }

  render(){
    return (
        <>
          <BrowserRouter>
          <Header />
          <MainPage />
          <Footer />
          </BrowserRouter>
        </>
    )
  }
}

export default Main;