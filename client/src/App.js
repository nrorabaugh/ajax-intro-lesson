import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import PingPong from './components/PingPong/PingPong.js'
import ShopViewList from './components/ShopList/ShopListView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <i className="material-icons logo">
            restaurant_menu
          </i>
          <Link to="/">
            <div className="link-item">Home</div>
          </Link>
          <Link to="/shops">
            <div className="link-item">Shops</div>
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={PingPong}/>
          <Route path="/shops" component={ShopViewList}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
