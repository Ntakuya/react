import React from 'react';
import HelloWorld from './hello-world/hello-world';
import IntroducingJSX from './introducing-jsx/introducing-jsx';
import RenderingElements from './rendering-elements/rendering-elements';
import ComponentsAndProps from './components-and-props/components-and-props';
import StateAndLifecycle from './state-and-lifecycle/state-and-lifecycle';
import HandlingEvents from './handling-events/handling-events';
import ConditionalRendering from './conditional-rendering/conditional-rendering';
import ListsAndKeys from './lists-and-keys/lists-and-keys';
import Forms from './forms/forms';

const MainConcepts = () => {
  return (
    <>
      <HelloWorld />
      <IntroducingJSX />
      <RenderingElements />
      <ComponentsAndProps name="Sara" />
      <ComponentsAndProps name="Cahal" />
      <ComponentsAndProps name="Edite" />
      <StateAndLifecycle />
      <HandlingEvents />
      <ConditionalRendering />
      <ListsAndKeys />
      <Forms />
    </>
  );
};

export default MainConcepts;
