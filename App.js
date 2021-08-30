import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/taskReducer.js'
import TaskList from './components/TaskList.js';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return(<Provider store={store}>
      <TaskList />
    </Provider>);
  }
}