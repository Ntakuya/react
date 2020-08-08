import React from 'react';
import { render } from '@testing-library/react';

import ToolbarButton from './toolbar-button';

describe(' ToolbarButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToolbarButton />);
    expect(baseElement).toBeTruthy();
  });
});
