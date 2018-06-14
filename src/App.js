import React from 'react';
import BlogForm from './components/BlogForm';
import BlogList from './components/BlogList';
import 'materialize-css/dist/css/materialize.min.css';
// import logo from './logo.svg';

const App = () => (
  <div>
  <h1 className="center"> Write some shit here</h1>
  <hr />
    <BlogForm />
    <BlogList />
  </div>
)

export default App;
