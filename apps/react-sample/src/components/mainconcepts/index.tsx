import React from 'react';
import HelloWorld from './hello-world/hello-world';
import IntroducingJSX from './introducing-jsx/introducing-jsx';
import RenderingElements from './rendering-elements/rendering-elements';
import ComponentsAndProps from './components-and-props/components-and-props';
import StateAndLifecycle from './state-and-lifecycle/state-and-lifecycle';

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
    </>
  );
};

export default MainConcepts;
