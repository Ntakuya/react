import React, { useEffect } from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface OuterClickExampleProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const StyledOuterClickExample = styled.div`
  color: pink;
`;

export const OuterClickExample: React.FC<OuterClickExampleProps> = ({
  isOpen,
  toggleOpen,
}) => {
  const toggleContainer = React.useRef(null);

  const onClickHandler = () => {
    toggleOpen();
  };

  const onClickOutsiseHandler = ($event) => {
    if (isOpen && !toggleContainer.current.contains($event.target)) {
      toggleOpen();
    }
  };

  useEffect(() => {
    console.log('call');
    window.addEventListener('click', onClickOutsiseHandler);
    console.log('call');
    return window.removeEventListener('click', onClickOutsiseHandler);
  }, []);

  return (
    <div ref={toggleContainer}>
      <button onClick={onClickHandler}>Select an option</button>
      {isOpen && (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      )}
    </div>
  );
};

export default OuterClickExample;
