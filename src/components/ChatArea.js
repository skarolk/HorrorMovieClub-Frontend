import React from 'react';
import NewMessageForm from './NewMessageForm';

const ChatArea = ({
  club: { id, messages },
}) => {
  return (
    <div className="messagesArea">
      <h2>{id}</h2>
      <ul>{orderedMessages(messages)}</ul>
      <NewMessageForm club_id={id} />
    </div>
  );
};

export default ChatArea;

// helpers

const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  );
  return sortedMessages.map(message => {
    return <li key={message.id}>{message.text}</li>;
  });
};
