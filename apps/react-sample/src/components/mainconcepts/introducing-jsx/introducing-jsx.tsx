import React from 'react';

import styled from 'styled-components';

interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User) {
  return user.firstName + ' ' + user.lastName;
}

/* eslint-disable-next-line */
export interface IntroducingJsxProps {}

function getGreeting(user?: User) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

export const IntroducingJsx = (props: IntroducingJsxProps) => {
  const user: User = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  return (
    <>
      <h1>Hello, {formatName(user)}!</h1>
      {getGreeting()}
      {getGreeting(user)}
    </>
  );
};

export default IntroducingJsx;
