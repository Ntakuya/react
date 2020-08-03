import React from 'react';
import { render } from '@testing-library/react';

import IntroducingJsx from './introducing-jsx';

describe(' IntroducingJsx', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IntroducingJsx />);
    expect(baseElement).toBeTruthy();
  });
});
