import React, { Fragment } from 'react';
import Label from "./label/label"

import styled from 'styled-components';

const items: { term: string; description: string; id: string }[] = [
  {
    term: 'term',
    description: 'description',
    id: 'id',
  },
];

function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

function Glossary(props) {
  return (
    <dl>
      {props.items.map((item, index) => (
        <ListItem item={item} key={item.id} />
      ))}
    </dl>
  );
}

/* eslint-disable-next-line */
export interface SemanticHtmlProps {}

const StyledSemanticHtml = styled.div`
  color: pink;
`;

export const SemanticHtml = (props: SemanticHtmlProps) => {
  return (
    <StyledSemanticHtml>
      <h1>Welcome to semantic-html!</h1>
      <Glossary items={items} />
      <Label />
    </StyledSemanticHtml>
  );
};

export default SemanticHtml;
