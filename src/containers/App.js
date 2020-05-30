import React, {Component} from 'react';
import './App.css';
import Bulletin from '../components/Bulletin/Bulletin';
import Categories from '../components/Categories/Categories';
import Navbar from '../components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
// Work on a navbar for 2 options : Bulletin and categories
// Add Read More button functionality
class App extends Component{
  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Bulletin}/>
          <Route path='/categories' component={Categories}/>
          {/* <h1>Caring Made Easy | Bulletin</h1> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
