import React from 'react';
import PropTypes from 'prop-types';

// import/no-unresolved
import 'foo';

// no-var
var a = 1;

// prefer-const
let b = 2;

// no-unused
const c = 1;

// exception to no-unused
const _d = 1;

// no-console
console.log(a, b);

export const myObject = {
  name: 'Rick' // missing trailing comma
} // missing semi

export const MyComponent = () => (
  <div>
    {/* jsx-a11y/label-has-for */}
    <label>Hi</label>

    {/* react/no-unescaped-entities */}
    <div>I'm a component</div>
  </div>
);

MyComponent.propTypes = {
  user: PropTypes.any, // react/forbid-prop-types
};
