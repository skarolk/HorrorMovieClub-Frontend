import React from 'react';
import NewMessageForm from './NewMessageForm';

const ChatArea = ({
  club: { id, messages },
}) => {
  return (
    <div className="chatWindow">
      <div className="messagesArea">
        <div>{orderedMessages(messages)}</div>
      </div>
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
    return <p key={message.id}>{message.text}</p>;
  });
};
