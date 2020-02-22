import React , {Component} from 'react';
import Header from '../layout/Header';
import MainPage from '../layout/MainPage';
import Footer from '../layout/Footer';
import { BrowserRouter } from 'react-router-dom';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      pathName: null,
    };

    console.log('header:' + this.state.pathName);
  }

  getPathName = (path) => {
    this.setState({
      pathName : path
    })
  }

  render(){
    return (
        <>
          <Header getRouter={this.getPathName} />
          <BrowserRouter>
            <MainPage />
          </BrowserRouter>
          <Footer />
        </>
    )
  }
}

export default Main;