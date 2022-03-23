import React, { useState, useContext, useEffect } from 'react';
/* eslint-disable */
export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const getLocalStorage = () => {
    const list = localStorage.getItem('list');
    if (list) return JSON.parse(localStorage.getItem('list'));
    return [];
  };
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
/* eslint-disable */
  return (
    <AppContext.Provider value={{
      completed, setCompleted, name, setName, list, setList,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
/* eslint-enable */
