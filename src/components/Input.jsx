import React from 'react';
import classes from './Input.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';

const Input = () => {
  return (
    <>
      <form className="form">
        <input type="text" />
        <button className="add-btn">
          <AiOutlinePlusCircle />
        </button>
      </form>
    </>
  );
};

export default Input;
