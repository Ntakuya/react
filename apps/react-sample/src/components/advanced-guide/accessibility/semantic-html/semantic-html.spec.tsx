import React from 'react';
import { render } from '@testing-library/react';

import SemanticHtml from './semantic-html';

describe(' SemanticHtml', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SemanticHtml />);
    expect(baseElement).toBeTruthy();
  });
});
