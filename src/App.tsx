import React from 'react';
import logo from './logo.svg';
import {data} from './data';

import './App.css';

function App() {
  const downloadEvent=()=>{
    const jsondata = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(data)
    )}`
    const link = document.createElement('a')
    link.href = jsondata
    link.download = 'data.txt';
    link.click();
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={downloadEvent}>Download</button>
    </div>
  );
}

export default App;
