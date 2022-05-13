import React from 'react';
import {NavLink} from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to='/'>HOME</NavLink>
      </li>

      <li>
        <NavLink to='/projects/new'>CREATE NEW</NavLink>
      </li>

      <li>
        <NavLink to='/user1/projects'>MY PROJECTS</NavLink>
      </li>
    </ul>
  )
};

export default NavLinks;
