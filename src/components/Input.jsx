import React from 'react';
import classes from './Input.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Input = () => {
  return (
    <>
      <form className={classes.form}>
        <input className={classes.input} type="text" placeholder="Add items ...." />
        <button className={classes.btn}>
          <AiOutlinePlusCircle className={classes['add-btn']} />
        </button>
      </form>
    </>
  );
};

export default Input;
