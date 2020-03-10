import React, {Component} from 'react';
import './App.css';
import Container from './Container';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      movieList:[]
    }
  }
  render() {
    return(
    <div className="App">
      <h1 id="h1">Welcome To NJ-Movie-App!!</h1>
      <Container  />
    </div>)
  };
}

export default App;