import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home'
import About from './pages/About'
import ArticlesList from './pages/ArticlesList'
import Article from './pages/Article'
import { BrowserRouter as Router, Route} from 'react-router-dom'



class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About}  />
          <Route path="/articles" component={ArticlesList}  />
          <Route path="/article" component={Article}  />
        </div>
      </Router>
      
    );
  }
  
}

export default App;
