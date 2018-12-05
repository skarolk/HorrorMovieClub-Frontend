import React from 'react';
import NewMessageForm from './NewMessageForm';

const ChatArea = (props) => {
  const orderedMessages = messages => {
    const sortedMessages = messages.sort(
      (a, b) => new Date(a.created_at) - new Date(b.created_at)
    );
    return sortedMessages.map(message => {
      let user = findUser(message)
      return <p key={message.id}>{user.username}: {message.text}</p>;
    });
  };

  const findUser = message => {
    return props.users.find(
       user => user.id === message.user_id
    )
  }

  return (
    <div className="chatWindow">
      <div className="messagesArea">
        <div>{props.club ? orderedMessages(props.club.messages) : null}</div>
      </div>
      <NewMessageForm user={props.user} club_id={props.club.id} />
    </div>
  );
};

export default ChatArea;
