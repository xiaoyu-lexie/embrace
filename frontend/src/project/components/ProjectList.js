import React from 'react';

import ProjectItem from './ProjectItem';

const ProjectList = (props) => {
  const {items, showButtons} = props;

  const renderedList = items.map((item) => {
    return (
      <div key={item.id}>
        <ProjectItem item={item} showButtons={showButtons}/>
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