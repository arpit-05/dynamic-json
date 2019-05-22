import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DUMMY} from './shared/DUMMY'
import Item from './components/Item'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
        dummy:DUMMY
    }
}
render(){
  return(<div>
    <Item dummy={this.state.dummy}/>
  </div>)
}
}

export default App;
