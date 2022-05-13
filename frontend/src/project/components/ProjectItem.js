import React from 'react';
import {Link} from 'react-router-dom';

const ProjectItem = (props) => {
  const {item} = props;

  return (
    <Link to={`/${item.creatorId}/projects`} >
      <div>
        Project Name: {item.title}
          {item.description}
      </div>
    </Link>
  )
};

export default ProjectItem;