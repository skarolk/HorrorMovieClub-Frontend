import React from 'react';

const ClubAvatars = (props) => {
  const getClubMembers = () => {
    let targetClub = props.club.id
    return props.users.filter(user => user.club_id === targetClub)
  }

  const renderAvatars = () => {
    let members = getClubMembers()
    return members.map(member => {
      return (
        <div key={member.id} className="clubPageUsernames">
          <img src={member.image} alt="" className="clubPageAvatars"/>
          <div>{member.username}</div>
        </div>
      )
    })
  }

  console.log(getClubMembers())
  return (
    <div className="avatarContainer">
      {renderAvatars()}
    </div>
  );
};

export default ClubAvatars;
