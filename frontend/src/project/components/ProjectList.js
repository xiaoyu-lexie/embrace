import React from 'react';

import ProjectItem from './ProjectItem';

const ProjectList = (props) => {
  const {items} = props;

  const renderedList = items.map((item) => {
    return (
      <div key={item.id}>
        <ProjectItem item={item} />
      </div>
    )
  })
  return (
    <div>
      {renderedList}
    </div>
  )
};

export default ProjectList;