import React from 'react';
import classes from './App.module.css';
import List from './components/List';
import Input from './components/Input';

const App = () => {
  return (
    <div className={classes.app}>
      <h1 className={classes.heading}>todos</h1>
      <Input />
      <List />
    </div>
  );
};

export default App;
