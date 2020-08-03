import React from 'react';
import MailBox from './mailbox/mailbox';

import styled from 'styled-components';

/* eslint-disable-next-line */
interface UserGreetingProps {}

function UserGreeting(props: UserGreetingProps) {
  return <h1>Welcome back!</h1>;
}

/* eslint-disable-next-line */
interface GuestGreeting {}
function GuestGreeting(props: GuestGreeting) {
  return <h1>Please sign up.</h1>;
}

/* eslint-disable-next-line */
interface GreetingProps {
  isLoggedIn: boolean;
}

function Greeting({ isLoggedIn }: GreetingProps) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

/* eslint-disable-next-line */
interface LoginButtonProps {
  onClick: () => void;
}

function LoginButton(props: LoginButtonProps) {
  return <button onClick={props.onClick}>Login</button>;
}

/* eslint-disable-next-line */
interface LogoutButtonProps {
  onClick: () => void;
}

function LogoutButton(props: LogoutButtonProps) {
  return <button onClick={props.onClick}>Logout</button>;
}

/* eslint-disable-next-line */
interface LoginControlProps {
  isLoggedIn: boolean;
  updateIsLoggedIn: (val: boolean) => void;
}

const LoginControl: React.FC<LoginControlProps> = ({
  isLoggedIn,
  updateIsLoggedIn,
}) => {
  const handleLoginClick = () => {
    updateIsLoggedIn(true);
  };
  const handleLogoutClick = () => {
    updateIsLoggedIn(false);
  };
  return isLoggedIn ? (
    <LogoutButton onClick={handleLogoutClick} />
  ) : (
    <LoginButton onClick={handleLoginClick} />
  );
};

/* eslint-disable-next-line */
export interface ConditionalRenderingProps {}

const StyledConditionalRendering = styled.div`
  color: pink;
`;

export const ConditionalRendering = (props: ConditionalRenderingProps) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const updateIsLoggedIn = (val: boolean) => {
    setIsLoggedIn(val);
  };
  return (
    <StyledConditionalRendering>
      <Greeting isLoggedIn={isLoggedIn} />
      <LoginControl
        isLoggedIn={isLoggedIn}
        updateIsLoggedIn={updateIsLoggedIn}
      />
      <MailBox />
    </StyledConditionalRendering>
  );
};

export default ConditionalRendering;
