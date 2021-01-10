import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Courses />
    </div>
  );
};

export default App;