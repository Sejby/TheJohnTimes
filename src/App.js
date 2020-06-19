import React from 'react';
import Content from './components/Content/Content';
import Article from './components/Article/Article';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <Header />
            <Content />
          </Route>
          <Route path='/article'>
            <Header />
            <Article />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
