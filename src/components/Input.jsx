import React from 'react';
import classes from './Input.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useGlobalContext } from '../context.js';

const Input = () => {
  const { name, setName, list, setList, completed } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    else {
      const newItem = { id: new Date().getTime().toString(), content: name, completed };
      setList([...list, newItem]);
    }
    setName('');
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <input
          className={classes.input}
          type="text"
          placeholder="Add items ...."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className={classes.btn}>
          <AiOutlinePlusCircle className={classes['add-btn']} />
        </button>
      </form>
    </>
  );
};

export default Input;
