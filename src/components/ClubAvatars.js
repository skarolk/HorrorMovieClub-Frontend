import React from 'react';

const ClubAvatars = (props) => {

  const renderAvatars = () => {
    // if (props.club) {
      let members = props.club.users
      return members.map(member => {
        return (
          <div key={member.id} className="clubPageUsernames">
            <img src={member.image} alt="" className="clubPageAvatars"/>
            <div>{member.username}</div>
          </div>
        )
      })
    // } else {
    //   return []
    // }

  }

  return (
    <div className="avatarContainer">
      {renderAvatars()}
    </div>
  );
};

export default ClubAvatars;
