import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
    if (props.to) {
      return (
        <Link
          to={props.to}
        >
          <button>{props.children}</button>
        </Link>
      )
    }

    return (
      <button
        disabled={props.disabled}
      >
        {props.children}
      </button>
    )
};

export default Button;