import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import store from './store';
import Home from './components/home';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
