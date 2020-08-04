import React from 'react';
import { render } from '@testing-library/react';

import ListsAndKeys from './lists-and-keys';

describe(' ListsAndKeys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ListsAndKeys />);
    expect(baseElement).toBeTruthy();
  });
});
