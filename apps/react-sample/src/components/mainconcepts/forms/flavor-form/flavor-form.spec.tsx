import React from 'react';
import { render } from '@testing-library/react';

import FlavorForm from './flavor-form';

describe(' FlavorForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FlavorForm />);
    expect(baseElement).toBeTruthy();
  });
});
