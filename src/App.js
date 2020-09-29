import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Griffin from "./pages/Griffin"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Links</h1>
        <li>
          <a href ="/">Home </a> <br/>
          <a href="/griffin">Griffin's Page</a>
        </li>
      </div>
      <Route exact path="/griffin" component={Griffin}/>
    </BrowserRouter>
  );
}

export default App;
