import React from 'react';


class ProfileCard extends React.Component{

  render() {
    return(

      <div className="profile-card">

        Hello   {this.props.username}

      </div>

    );
  }

}

export default ProfileCard;
