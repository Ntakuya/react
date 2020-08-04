import React from 'react';
import { render } from '@testing-library/react';

import LiftingStateUp from './lifting-state-up';

describe(' LiftingStateUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LiftingStateUp />);
    expect(baseElement).toBeTruthy();
  });
});
