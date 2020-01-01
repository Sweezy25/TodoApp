import React from 'react';
import MainPage from './container/MainPage';
import Completed from './container/CompletedTask/Completed';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={MainPage}/>
          <Route path="/completed" component={Completed}/>
      </Router>
    </div>
  );
}

export default App;
;
