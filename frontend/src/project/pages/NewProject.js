import React, {useState, useEffect, useCallback} from 'react';

import Input from '../../shared/FormElements/Input';
import Dropdown from '../../shared/FormElements/Dropdown';
import Checkbox from '../../shared/FormElements/Checkbox';
import Button from '../../shared/FormElements/Button';
import {validate, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/validators';

const NewProject = () => {
  const [eachValid, setEachValid] = useState(
    {
      title: false,
      description: false,
      language: false,
      github: false
    }
  );

  const [formValid, setFormValid] = useState(false)

  const [checkboxValues, setCheckboxValues] = useState({});

  const updateInputValiHandler = (inputId, termValue, validators) => {
    setEachValid({
        ...eachValid,
        [inputId]: validate(termValue, validators)
    })
  }

  const checkboxValiHandler = useCallback((id, value) => {
    setCheckboxValues(prev => ({
      ...prev,
      [id]: value
    }))


    // console.log('2nd')

  }, [])

  useEffect(() => {
    setEachValid(prev => ({
      ...prev,
      language: Object.values(checkboxValues).some(value => value === true)
    }))

    // console.log('3rd')

  }, [checkboxValues])

  // console.log('formValid', formValid)



  useEffect(() => {
    setFormValid(Object.values(eachValid).every(input => input === true))
    // formValidity = Object.values(eachValid).every(input => input === true)
  }, [eachValid])
  // const formValidity = Object.values(formValid).every(input => input === true)

  return (
    <form>
      <Input
        id='title'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid project title'
        formValidHandler={updateInputValiHandler}
        initialValue=''
      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText='Please enter a valid description (at least 2 characters).'
        formValidHandler={updateInputValiHandler}
        initialValue=''
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
      <div>Language (Please Select at Least One Language): </div>
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
      <Input
        id='github'
        label='Project Github'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid github address.'
        formValidHandler={updateInputValiHandler}
        initialValue=''
      />
      <Input
        id='linkedin'
        label='LinkedIn Link(optional)'
        element='input'
        initialValue=''
        // validators={[VALIDATOR_REQUIRE()]}
        // formValidHandler={updateInputValiHandler}
      />

      <Button disabled={!formValid}>ADD NEW PROJECT</Button>
    </form>
  )
};

export default NewProject;