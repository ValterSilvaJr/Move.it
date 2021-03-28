import React, { useContext, useState } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { CurrentExperienceBar, CurrentExperienceText, Header } from './styles';

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);
  const percentToNextLevel = Math.round(currentExperience * 100 ) / experienceToNextLevel;

  return (
      <Header>
          <span>0 xp</span>
          <div>
            <CurrentExperienceBar moveLeft={`${percentToNextLevel}%`} />
            <CurrentExperienceText moveLeft={`${percentToNextLevel}%`} >{currentExperience} xp</CurrentExperienceText>
          </div>
          <span>{experienceToNextLevel} xp</span>
      </Header>
  );
}