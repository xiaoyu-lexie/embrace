import React, {useState} from 'react';

import {validate} from '../validators';

const Input = (props) => {
  const [term, setTerm] = useState('');
  const [termValid, setTermValid] = useState(false);
  const [focus, setFocus] = useState(false)

  const {formValidHandler} = props;

  const termChangeHandler = (e) => {
    setTerm(e.target.value)
    setTermValid(validate(e.target.value, props.validators))
    formValidHandler(props.id, e.target.value, props.validators)
  }

  const blurHandler = () => {
    setFocus(true);
  }

  const element = props.element === 'input' ?
  <input
    type='text'
    id={props.id}
    onChange={termChangeHandler}
    value={term}
    onBlur={blurHandler}
    ></input> :
  <textarea
    id={props.id}
    rows={props.rows || 10}
    cols={props.cols || 40}
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