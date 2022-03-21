import React from 'react';
import ListItem from './ListItem';
import classes from './List.module.css';
import { useGlobalContext } from '../context';

const List = () => {
  const { list } = useGlobalContext();
  {
    if (list.length === 0)
      return (
        <div>
          <h3>Empty List</h3>
        </div>
      );
    return (
      <ul className={classes.list}>
        {list.map((el) => {
          return <ListItem item={el} key={el.id} />;
        })}
      </ul>
    );
  }
};

export default List;
