import React from 'react';
import { render } from '@testing-library/react';

import HandlingEvents from './handling-events';

describe(' HandlingEvents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HandlingEvents />);
    expect(baseElement).toBeTruthy();
  });
});
