import React from 'react';
import {useParams} from 'react-router-dom';

import ProjectList from '../components/ProjectList';

const PROJECTS_DUMMY = [
  {
    id: 'p1',
    title: "shopping cart",
    description: "this is a e-commerce website",
    imageUrl: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/sanmateoca/shutterstock_4189008910-9b68011a5056a36_9b6802fa-5056-a36a-0bbb53c8e971b411.jpg',
    language: 'JavaScript',
    end: 'fullstack',
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
    end: 'back-end',
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
    end: 'front-end',
    github: 'https://github.com/xiaoyu-lexie',
    creatorId: 'user2',
    creatorName: 'seconduser',
    linkedIn: 'http://google.com',
    likes: 1,
    comments: [{

    }]
  }
]

const UserProjects = () => {
  const userId = useParams().userId;

  const clickedUserProjects = PROJECTS_DUMMY.filter((item) => {
    return item.creatorId === userId
  })

  return (
   <ProjectList items={clickedUserProjects} />
  )
};

export default UserProjects;