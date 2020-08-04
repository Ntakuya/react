import React from 'react';
import { render } from '@testing-library/react';

import EssayForm from './essay-form';

describe(' EssayForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EssayForm />);
    expect(baseElement).toBeTruthy();
  });
});
