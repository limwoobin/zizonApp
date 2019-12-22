import React, {Component} from 'react';
import './App.css';
import {hot} from 'react-hot-loader';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';



class App extends Component{
  state = {
    customers: ''
  }  
  
  componentDidMount(){
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
  
  callApi = async() => {
    const response = await fetch('/dr/member/hi');
    const body = await response.json();
    console.log(body);
    return body;
  }
  
  render(){
    return( 
        <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.customers ? this.state.customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        }) : ''}
        </TableBody>
      </Table>
    );
  } 
}

export default  hot(module)(App);
