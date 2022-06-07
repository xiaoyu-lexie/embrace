import React, {useState, useEffect, useCallback} from 'react';

import Input from '../../shared/FormElements/Input';
import Dropdown from '../../shared/FormElements/Dropdown';
import Checkbox from '../../shared/FormElements/Checkbox';
import {validate, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/validators';

const NewProject = () => {
  const [formValid, setFormValid] = useState(
    {
      title: false,
      description: false,
      language: false
    }
  );

  const [checkboxValues, setCheckboxValues] = useState({});

  const updateInputValiHandler = (inputId, termValue, validators) => {
    setFormValid({
        ...formValid,
        [inputId]: validate(termValue, validators)
    })
  }

  const checkboxValiHandler = useCallback((id, value) => {
    setCheckboxValues(prev => ({
      ...prev,
      [id]: value
    }))

  }, [])

  useEffect(() => {
    setFormValid(prev => ({
      ...prev,
      language: Object.values(checkboxValues).some(value => value === true)
    }))

  }, [checkboxValues])


  // let formValidity;
  // useEffect(() => {
  //   formValidity = Object.values(formValid).every(input => input === true)
  // }, [formValid])
  const formValidity = Object.values(formValid).every(input => input === true)

  return (
    <form>
      <Input
        id='title'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid project title'
        formValidHandler={updateInputValiHandler}
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText='Please enter a valid description (at least 2 characters).'
        formValidHandler={updateInputValiHandler}
      />
      <Dropdown
        id='category'
        label='Category'
        options={[
          {
            value: 'frontend',
            label: 'Front End'
          },
          {
            value: 'backend',
            label: 'Back End'
          },
          {
            value: 'fullstack',
            label: 'Full Stack'
          }
          ]}
      />
      <div>Language: </div>
      <Checkbox
        label='Javascript'
        id='js'
        checkboxValiHandler={checkboxValiHandler}
      />
      <Checkbox
        label='JAVA'
        id='java'
        checkboxValiHandler={checkboxValiHandler}
      />
      <Checkbox
        label='Python'
        id='python'
        checkboxValiHandler={checkboxValiHandler}
      />

      <button disabled={!formValidity}>ADD NEW PROJECT</button>
    </form>
  )
};

export default NewProject;