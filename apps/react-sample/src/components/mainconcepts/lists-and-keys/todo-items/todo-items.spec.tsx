import React from 'react';
import { render } from '@testing-library/react';

import TodoItems from './todo-items';

describe(' TodoItems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItems />);
    expect(baseElement).toBeTruthy();
  });
});
