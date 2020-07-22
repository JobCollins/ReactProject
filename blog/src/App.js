import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import ArticlesListPage from './pages/ArticlesListPage'
import Article from './pages/Article'
import NavBar from './NavBar'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NotFoundPage from './pages/NotFound';



class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About}  />
              <Route path="/articles" component={ArticlesListPage}  />
              <Route path="/article/:name" component={Article}  />
              <Route component={NotFoundPage} />
            </Switch>
            
          </div>
          
        </div>
      </Router>
      
    );
  }
  
}

export default App;
