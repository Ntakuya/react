import React from 'react';
import { render } from '@testing-library/react';

import Mailbox from './mailbox';

describe(' Mailbox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mailbox />);
    expect(baseElement).toBeTruthy();
  });
});
