import React from 'react';

import { ProfileContainer } from './styles';

const Profile: React.FC = () => {
  return (
      <ProfileContainer>
          <img src="https://github.com/valtersilvajr.png" alt="Valter Silva" />
          <div>
            <strong>Valter Silva</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level 1
            </p>
          </div>
      </ProfileContainer>
  );
}

export default Profile;