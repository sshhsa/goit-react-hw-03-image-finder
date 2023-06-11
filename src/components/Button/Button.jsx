import React from 'react';
import css from './Button.module.css';

function ButtonLoadMore({ onClick }) {
  return (
    <button type="button" onClick={onClick} className={css.buttonLoadMore}>
      Load More
    </button>
  );
}

export default ButtonLoadMore;
