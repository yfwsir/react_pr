import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import Home from './pages/home/index'
import Classify from './pages/classify/index'
import Taste from './pages/taste/index'
import Order from './pages/order/index'
import Mine from './pages/mine/index'
import Footertab from './common/footerTab/index'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact render={()=>{
            return <Redirect to='/home'/>
          }}/>
          <Route path='/home' component={Home}/>
          <Route path='/classify' component={Classify}/>
          <Route path='/taste' component={Taste}/>
          <Route path='/order' component={Order}/>
          <Route path='/mine' component={Mine}/>
          <Route component={Footertab}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
