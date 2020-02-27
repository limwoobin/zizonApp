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
  }

  getPathName = (path) => {
    console.log('getPathName:' + path);
    this.setState({
      path : path
    })
    console.log('reload...');
  }

  

  render(){
    return (
        <>
          <Header getRouter={this.getPathName} />
          <BrowserRouter>
            <MainPage routerName={this.state.path}/>
          </BrowserRouter>
          <Footer />
        </>
    )
  }
}

export default Main;