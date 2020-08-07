import React from 'react';
import { render } from '@testing-library/react';

import AdvancedGuide from './advanced-guide';

describe(' AdvancedGuide', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdvancedGuide />);
    expect(baseElement).toBeTruthy();
  });
});
