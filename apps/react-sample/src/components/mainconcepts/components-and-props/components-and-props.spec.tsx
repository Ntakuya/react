import React from 'react';
import { render } from '@testing-library/react';

import ComponentsAndProps from './components-and-props';

describe(' ComponentsAndProps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsAndProps />);
    expect(baseElement).toBeTruthy();
  });
});
