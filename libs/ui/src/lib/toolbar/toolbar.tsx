import React from 'react';
import ToolbarButton from '../toolbar-button/toolbar-button';
import styled from 'styled-components';

export const Theme = {
  dark: 'theme/dark',
} as const;

export type Theme = typeof Theme[keyof typeof Theme];

/* eslint-disable-next-line */
export interface ToolbarProps {
  theme: Theme;
}

const StyledToolbar = styled.div`
  color: pink;
`;

export const Toolbar: React.FC<ToolbarProps> = ({ theme }) => {
  return <ToolbarButton theme={theme} />;
};

export default Toolbar;
