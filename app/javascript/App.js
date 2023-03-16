import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Message from './Message';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Greeting />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;