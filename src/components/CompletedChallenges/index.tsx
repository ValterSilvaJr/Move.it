import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengeContext';

import { CompletedChallengesContainer } from './styles';

export default function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);
  return (
      <CompletedChallengesContainer>
          <span>Desafios Completos</span>
          <span>{ challengesCompleted }</span>
      </CompletedChallengesContainer>
  );
}