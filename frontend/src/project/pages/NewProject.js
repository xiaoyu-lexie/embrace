import React, {useState, useEffect} from 'react';

import Input from '../../shared/FormElements/Input';
import Dropdown from '../../shared/FormElements/Dropdown';
import {validate, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/validators';

const NewProject = () => {
  const [formValid, setFormValid] = useState(
    {
      title: false,
      description: false
    }
  );

  const updateInputValiHandler = (inputId, termValue, validators) => {
    setFormValid({
        ...formValid,
        [inputId]: validate(termValue, validators)
    })
  }

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

      <button disabled={!formValidity}>ADD NEW PROJECT</button>
    </form>
  )
};

export default NewProject;