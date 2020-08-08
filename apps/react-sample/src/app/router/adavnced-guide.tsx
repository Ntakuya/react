import React from 'react';
import { Route } from 'react-router';
import ContextContainer from '@containers/advanced-guide/context-container/context-container';

const advancedGuideBasePath = '/advanced-guide';

export const advancedGuideRoutes = [
  {
    path: `${advancedGuideBasePath}/context`,
    component: ContextContainer,
  },
];

export const AdvancedGuide = () => {
  return (
    <>
      {advancedGuideRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact
          component={route.component}
        />
      ))}
    </>
  );
};

export default AdvancedGuide;
