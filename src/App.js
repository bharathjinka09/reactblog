import React from 'react';
import logo from './logo.svg';
import Home from './pages/Home';
import Post from './pages/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import BlogProvider from "./context/BlogProvider";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post} />
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  );
}

export default App;
