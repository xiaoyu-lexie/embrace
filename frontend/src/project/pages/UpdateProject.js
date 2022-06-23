import React, {useState, useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Dropdown from '../../shared/FormElements/Dropdown';
import Checkbox from '../../shared/FormElements/Checkbox';
import Button from '../../shared/FormElements/Button';
import {validate, VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH} from '../../shared/validators';

const PROJECTS_DUMMY = [
  {
    id: 'p1',
    title: "shopping cart",
    description: "this is a e-commerce website",
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
    language: 'JavaScript',
    category: 'fullstack',
    github: 'https://github.com/xiaoyu-lexie?',
    creatorName: 'firstuser',
    creatorId: 'user1',
    linkedIn: 'http://google.com',
    likes: 3,
    comments: [{

    }]
  },
  {
    id: 'p2',
    title: "second example",
    description: "this is a second website",
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
    language: 'Java',
    category: 'back-end',
    github: 'https://github.com/xiaoyu-lexie',
    creatorId: 'user2',
    creatorName: 'seconduser',
    linkedIn: 'http://google.com',
    likes: 2,
    comments: [{

    }]

  },
  {
    id: 'p3',
    title: "third example",
    description: "this is a third website",
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
    language: 'JavaScript',
    category: 'front-end',
    github: 'https://github.com/xiaoyu-lexie',
    creatorId: 'user2',
    creatorName: 'seconduser',
    linkedIn: 'http://google.com',
    likes: 1,
    comments: [{

    }]
  }
];


const UpdateProject = (props) => {

  const projectId = useParams().projectId;

  const identifiedProject = PROJECTS_DUMMY.find(project => project.id === projectId);


  // copy from NEW
  const [eachValid, setEachValid] = useState(
    {
      title: true,
      description: true,
      language: true,
      github: true
    }
  );

  const [formValid, setFormValid] = useState(true)


  const [checkboxValues, setCheckboxValues] = useState({});

  const updateInputValiHandler = (inputId, termValue, validators) => {
    setEachValid({
        ...eachValid,
        [inputId]: validate(termValue, validators)
    })

    console.log('inputId', inputId)
  }

  const checkboxValiHandler = useCallback((id, value) => {
    setCheckboxValues(prev => ({
      ...prev,
      [id]: value
    }))


    console.log('2nd')

  }, [])

  useEffect(() => {
    setEachValid(prev => ({
      ...prev,
      language: Object.values(checkboxValues).some(value => value === true)
    }))

    console.log('3rd')

  }, [checkboxValues])

  // console.log('formValid', formValid)
  // console.log('checkboxValues', checkboxValues)
  // console.log('eachValid', eachValid)


  useEffect(() => {
    setFormValid(Object.values(eachValid).every(input => input === true))

    console.log('1st')
  }, [eachValid])


  return (
    <form>
      <Input
        id='title'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid project title'
        formValidHandler={updateInputValiHandler}
        initialValue={identifiedProject.title}

      />
      <Input
        id='description'
        label='Description'
        element='textarea'
        validators={[VALIDATOR_MINLENGTH(2)]}
        errorText='Please enter a valid description (at least 2 characters).'
        formValidHandler={updateInputValiHandler}
        initialValue={identifiedProject.description}
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
          initialValue={identifiedProject.category}
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
      />
      <Input
        id='linkedin'
        label='LinkedIn Link(optional)'
        element='input'
        // validators={[VALIDATOR_REQUIRE()]}
        // formValidHandler={updateInputValiHandler}
      />

      <Button disabled={!formValid}>ADD NEW PROJECT</Button>
    </form>
  )
};

export default UpdateProject;