import React, { useState, useContext, useEffect } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if (list) return JSON.parse(localStorage.getItem('list'));
    else return [];
  };
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  return (
    <AppContext.Provider value={{ completed, setCompleted, name, setName, list, setList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
