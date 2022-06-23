import React from 'react';

import ProjectList from '../components/ProjectList';

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

const Projects = () => {
  return (
    <ProjectList items={PROJECTS_DUMMY} />
  )
};

export default Projects;