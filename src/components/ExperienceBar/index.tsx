import React, { useState } from 'react';

import { CurrentExperienceBar, CurrentExperienceText, Header } from './styles';

const ExperienceBar: React.FC = () => {
    const [progress, setprogress] = useState('50%');
  return (
      <Header>
          <span>8 xp</span>
          <div>
            <CurrentExperienceBar moveLeft={progress} />
            <CurrentExperienceText moveLeft={progress} >300 xp</CurrentExperienceText>
          </div>
          <span>600 xp</span>
      </Header>
  );
}

export default ExperienceBar;