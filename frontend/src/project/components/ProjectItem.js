import React from 'react';
import {Link} from 'react-router-dom';

import Button from '../../shared/FormElements/Button';

const ProjectItem = (props) => {
  const {item, showButtons} = props;

  return (
    <div>
      <Link to={`/${item.creatorId}/projects`} >
        <div>
          Project Name: {item.title}
            {item.description}
        </div>

      </Link>
      {showButtons && <Button to={`/projects/${item.id}`}>EDIT</Button>}
    </div>
  )
};

export default ProjectItem;