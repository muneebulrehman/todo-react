import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import classes from './ListItem.module.css';
import { useGlobalContext } from '../context';

const ListItem = ({ item }) => {
  const { setCompleted, list, setList } = useGlobalContext();
  const { id, content, completed } = item;

  const handleDelete = () => {
    const newList = list.filter((el) => el.id !== id);
    setList(newList);
  };

  const handleCheckBox = (e) => {
    setCompleted(e.target.checked);
    setList(
      list.map((item) => {
        if (item.id === id) return { ...item, completed: e.target.checked };
        return item;
      })
    );
  };

  return (
    <li className={classes['list-item']}>
      <input
        type="checkbox"
        checked={completed}
        className={classes.input}
        onChange={handleCheckBox}
      />
      <p style={{ textDecoration: `${completed ? 'line-through' : ''}` }}>{content}</p>
      <button className={classes.btn} onClick={handleDelete}>
        <AiOutlineDelete className={classes['remove-btn']} />
      </button>
    </li>
  );
};

export default ListItem;
