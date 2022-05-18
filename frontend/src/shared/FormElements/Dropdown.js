import React, {useState} from 'react';

const Dropdown = (props) => {
  const {id, label, options} = props;

  const [select, setSelect] = useState('');

  const renderedOptions = options.map((option) => {
    return <option key={option.value} value={option.value}>{option.label}</option>
    }
  )

  const selectChangeHandler = (e) => {
    setSelect(e.target.value)
  }

  return (
    <div>
      <label htmlFor={id}>{label}}</label>
      <select name='category' id={id} value={select} onChange={selectChangeHandler}>
        {renderedOptions}
      </select>
    </div>
  )
};

export default Dropdown;