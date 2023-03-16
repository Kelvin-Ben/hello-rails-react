// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={Greeting} />
      </BrowserRouter>
    </Provider>
  );
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
});