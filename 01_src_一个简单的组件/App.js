import React,{Component} from 'react';
import './App.css';
import Person from './components/person'

class App extends Component{
  render(){
    return(
      <div>
        <h2>App我来了</h2>
        <Person/>
      </div>
    )
  }
}
export default App;
