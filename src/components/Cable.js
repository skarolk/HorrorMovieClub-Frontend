import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';

const Cable = ({ clubs, handleReceivedMessage }) => {
  return (
    <Fragment>
      {clubs.map(club => {
        return (
          <ActionCable
            key={club.id}
            channel={{ channel: 'MessagesChannel', club: club.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;
