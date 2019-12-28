import React, {Component} from 'react';
import MainPage from './MainPage';
import Footer from './Footer';

class Main extends Component{
  constructor(props){
    super(props);
    this.state = {
      page: 0,
    }
  }

  _renderMain = () => {
    const {page}  = this.props;
    return <MainPage />;
  }
  
  render(){
    return(
      <div>
        {this._renderMain()}
        <div className="inc_footer"><Footer /></div>
      </div>
    );
  }
}

export default Main;
