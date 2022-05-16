import React from 'react';

import Input from '../../shared/FormElements/Input';
import {VALIDATOR_REQUIRE} from '../../shared/validators';

const NewProject = () => {
  return (
    <form>
      <Input
        id='title'
        label='Title'
        element='input'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid project title'
      />
    </form>
  )
};

export default NewProject;