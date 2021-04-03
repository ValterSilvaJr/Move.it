import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { ProfileContainer } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
      <ProfileContainer>
          <img src="https://github.com/valtersilvajr.png" alt="Valter Silva" />
          <div>
            <strong>Valter Silva</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}
            </p>
          </div>
      </ProfileContainer>
  );
}

export default Profile;