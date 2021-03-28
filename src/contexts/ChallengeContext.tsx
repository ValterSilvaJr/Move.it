import { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface IChallenge {
    type: 'body' | 'eye',
    description: string;
    amount: number;
}

interface IChallengesContextData {
    level: number;
    challengesCompleted: number;
    currentExperience: number;
    activeChallenge: IChallenge;
    experienceToNextLevel: number;
    resetChallenge(): void;
    levelUp(): void;
    startNewChallenge(): void;
}

interface IChallegeProviderProps {
    children: ReactNode;
}

export const ChallengesContext = createContext({} as IChallengesContextData);

export function ChallengesProvider({ children }: IChallegeProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2 );

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);
    }

    function resetChallenge(){
        setActiveChallenge(null);
    }

    return (
        <ChallengesContext.Provider 
            value={{ 
                level, 
                challengesCompleted, 
                currentExperience,
                activeChallenge,
                experienceToNextLevel,
                levelUp, 
                startNewChallenge,
                resetChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}