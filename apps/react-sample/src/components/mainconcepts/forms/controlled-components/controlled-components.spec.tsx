import React from 'react';
import { render } from '@testing-library/react';

import ControlledComponents from './controlled-components';

describe(' ControlledComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ControlledComponents />);
    expect(baseElement).toBeTruthy();
  });
});
