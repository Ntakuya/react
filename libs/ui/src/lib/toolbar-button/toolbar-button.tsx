import React from 'react';

import styled from 'styled-components';
import { Theme } from '../toolbar/toolbar';

/* eslint-disable-next-line */
export interface ToolbarButtonProps {
  theme: Theme;
}

const StyledToolbarButton = styled.div`
  color: pink;
`;

export const ToolbarButton = (props: ToolbarButtonProps) => {
  return <button>{props.theme}</button>;
};

export default ToolbarButton;
