import React from 'react';
import FilterLink from '../../containers/filer-link';
import { VisilibilityFilters } from '../../../store/actions';

/* eslint-disable-next-line */
export interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={VisilibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisilibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisilibilityFilters.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </div>
  );
};

export default Footer;
