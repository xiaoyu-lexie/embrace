import React, {useState, useEffect} from 'react';

const Checkbox = (props) => {
  const {label, id, checkboxValiHandler} = props;

  const [checked, setChecked] = useState({[id]:false})

  // console.log('checked', checked)
  const checkChangeHandler = () => {
    setChecked({[id]:!checked[id]})

    // do we need useEffect here?
    // checkboxValiHandler(id, checked)
  }

  // console.log('checked', checked)

  useEffect(() => {
    checkboxValiHandler(id, checked[id])
  }, [checked, id, checkboxValiHandler])

  return (
    <div>
      <input
      type='checkbox'
      id={id}
      name={id}
      onChange={checkChangeHandler}
      value={checked}
    />
    <label htmlFor={id}>{label}</label>
    </div>
  )
};

export default Checkbox;