import React, {useState} from 'react';

import {validate} from '../validators';

//title, label, element

const Input = (props) => {
  const [term, setTerm] = useState('');
  const [termValid, setTermValid] = useState(false);
  const [focus, setFocus] = useState(false)



  const termChangeHandler = (e) => {
    setTerm(e.target.value)
    setTermValid(validate(e.target.value, props.validators))
  }

  const blurHandler = () => {
    setFocus(true);
  }

  const element = props.element === 'input' ?
  <input
    type='text'
    id={props.title}
    onChange={termChangeHandler}
    value={term}
    onBlur={blurHandler}
    ></input> :
  <textarea
    id={props.title}
    rows={props.rows || 3}
    cols={props.cols || 10}
    onChange={termChangeHandler}
    value={term}
    onBlur={blurHandler}
    ></textarea>

  return (
    <div>
      <label htmlFor={props.title}>{props.label}</label>
      {element}
      {!termValid && focus && <p>{props.errorText}</p>}
    </div>
  )
};

export default Input;