import React from 'react';
import { render } from '@testing-library/react';

import StateAndLifecycle from './state-and-lifecycle';

describe(' StateAndLifecycle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StateAndLifecycle />);
    expect(baseElement).toBeTruthy();
  });
});
