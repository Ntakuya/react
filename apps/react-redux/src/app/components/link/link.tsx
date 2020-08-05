import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface LinkProps {
  onClick: () => void,
  active: boolean
}

const StyledLink = styled.div`
  color: pink;
`;

export const Link: React.FC<LinkProps> = ({
  onClick,
  active,
  children
}) => {
  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: '4px'
      }}
    >
      {children}
    </button>
  );
};

export default Link;
