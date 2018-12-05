import React from 'react';

const ClubAvatars = (props) => {

  const renderAvatars = () => {
    let members = props.club.users
    if (members.length > 0) {
      return members.map(member => {
        return (
          <React.Fragment key={member.id} >
            { member.id !== props.user.id ?
              <div className="clubPageUsernames">
                <img src={member.image} alt="" className="clubPageAvatars"/>
                <div>{member.username}</div>
              </div> : null
            }
          </React.Fragment>
        )
      })
    }
  }

  return (
    <div className="avatarContainer">
      {renderAvatars()}
      <div className="clubPageUsernames">
        <img src={props.user.image} alt="" className="clubPageAvatars"/>
        <div>{props.user.username}</div>
      </div>
    </div>
  );
};

export default ClubAvatars;
