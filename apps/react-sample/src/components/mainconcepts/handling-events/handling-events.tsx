import React from 'react';

/* eslint-disable-next-line */
interface ToggleProps {}

const Toggle: React.FC<ToggleProps> = () => {
  const [isToggleOn, setIsToggleOn] = React.useState(true);
  const handleClick = ($event: React.MouseEvent) => {
    setIsToggleOn(!isToggleOn);
  };

  return <button onClick={handleClick}>{isToggleOn ? 'ON' : 'OFF'}</button>;
};

/* eslint-disable-next-line */
export interface HandlingEventsProps {}

export const HandlingEvents = (props: HandlingEventsProps) => {
  function handleClick($event: React.MouseEvent) {
    $event.preventDefault();
    console.log('The link was clicked.');
  }
  return (
    <>
      <a href="#" onClick={handleClick}>
        Click me
      </a>
      <Toggle />
    </>
  );
};

export default HandlingEvents;
