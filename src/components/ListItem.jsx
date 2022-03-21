import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import classes from './ListItem.module.css';

const ListItem = ({ item }) => {
  return (
    <li className={classes['list-item']}>
      <input type="checkbox" />
      <p>Buy eggs and cheese</p>
      <button className={classes.btn}>
        <AiOutlineDelete className={classes['remove-btn']} />
      </button>
    </li>
  );
};

export default ListItem;
