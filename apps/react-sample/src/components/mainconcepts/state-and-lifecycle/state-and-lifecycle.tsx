import React, { useState } from 'react';

function Tick(props: { date: Date }) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleString()}.</h2>
    </div>
  );
}

/* eslint-disable-next-line */
export interface StateAndLifecycleProps {}

export const StateAndLifecycle = (props: StateAndLifecycleProps) => {
  const [loaded, updateLoaded] = useState(false);
  const [nowDate, updateNowDate] = useState(new Date());
  if (!loaded) {
    updateLoaded(true);
  }
  return <Tick date={nowDate} />;
};

export default StateAndLifecycle;
