import React, { useState,useEffect } from 'react';
import './App.css';
import List from './List';
import Menu from './Menu';


function App() {

  return (
    <div className="App">
     <Menu title="libreria" />
     <List  />
    </div>
  );
}

export default App;
