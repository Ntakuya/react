import React from 'react';

import styled from 'styled-components';

const messages = ['React', 'Re: React', 'Re:Re: React'];

/* eslint-disable-next-line */
export interface MailboxProps {
  unreadMessages: string[];
}

const Mailbox: React.FC<MailboxProps> = ({ unreadMessages }) => {
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
};

/* eslint-disable-next-line */
export interface MailboxWrapperProps {}

const StyledMailbox = styled.div`
  color: pink;
`;

export const MailboxWrapper = (props: MailboxWrapperProps) => {
  return (
    <StyledMailbox>
      <Mailbox unreadMessages={messages} />
    </StyledMailbox>
  );
};

export default MailboxWrapper;
