import React from 'react';
import { render } from '@testing-library/react';

import ContextContainer from './context-container';

describe(' ContextContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextContainer />);
    expect(baseElement).toBeTruthy();
  });
});
