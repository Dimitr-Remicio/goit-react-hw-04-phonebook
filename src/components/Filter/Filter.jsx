import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';



const Filter = ({ value, onChange }) => (

  const onChangeC = (event) => {
    let value = event.currentTarget.value.toLowerCase();
    setFilterToState(value);
  };
  return(

    
    <div className={style.filter}>
    <p>Filter</p>
    <input type="name" value={value} onChange={onChange} />
  </div>
  )
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
