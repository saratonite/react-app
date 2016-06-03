import React from 'react';
import ProfileCard from './ProfileCard';

class ProfileComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <ProfileCard username="Sarath"/>
      </div>
    );
  }
}

ProfileComponent.defaultProps = {
};

export default ProfileComponent;
