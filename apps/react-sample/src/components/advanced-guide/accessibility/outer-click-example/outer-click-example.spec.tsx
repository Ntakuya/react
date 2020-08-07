import React from 'react';
import { render } from '@testing-library/react';

import OuterClickExample from './outer-click-example';

describe(' OuterClickExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OuterClickExample />);
    expect(baseElement).toBeTruthy();
  });
});
