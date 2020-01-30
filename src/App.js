import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import About from './components/About';
import Interests from './components/Interests';
import Error from './components/Error';
import Navigation from './components/Navigation';
import FrontEnd from './components/FrontEnd';
import BackEnd from './components/BackEnd';
import DataAnalysis from './components/DataAnalysis.js';
import Mobile from './components/Mobile.js';
import './App.css'
 
class App extends Component {
  render() {
    return (     
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/interests" component={Interests}/>
             <Route path="/frontend" component={FrontEnd}/>
             <Route path="/backend" component={BackEnd}/>
             <Route path="/dataanalysis" component={DataAnalysis}/>
             <Route path="/mobileapps" component={Mobile}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
      
    );
  }
}
 
export default App;
