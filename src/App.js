import React, { Component } from 'react';
import './App.css';
import Main from './component/Main';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
const store = createStore(rootReducer);
class App extends Component {
  render() {
    console.log("State:-", store.getState());
    return (
      <Provider store ={store} className="App">
        <Main/>
      </Provider>
    );
  }
}

export default App;
