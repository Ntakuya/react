import React from 'react';
import ControlledComponents from './controlled-components/controlled-components';
import EssayForm from './essay-form/essay-form';
import FlavorForm from './flavor-form/flavor-form';
import ReservationForm from './reservation/reservation';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FormsProps {}

const StyledForms = styled.div`
  color: pink;
`;

export const Forms = (props: FormsProps) => {
  return (
    <StyledForms>
      <ControlledComponents />
      <EssayForm />
      <FlavorForm />
      <ReservationForm />
    </StyledForms>
  );
};

export default Forms;
