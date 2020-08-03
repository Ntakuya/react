import React from 'react';
import { render } from '@testing-library/react';

import ConditionalRendering from './conditional-rendering';

describe(' ConditionalRendering', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConditionalRendering />);
    expect(baseElement).toBeTruthy();
  });
});
