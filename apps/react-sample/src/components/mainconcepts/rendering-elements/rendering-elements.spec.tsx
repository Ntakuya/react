import React from 'react';
import { render } from '@testing-library/react';

import RenderingElements from './rendering-elements';

describe(' RenderingElements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenderingElements />);
    expect(baseElement).toBeTruthy();
  });
});
