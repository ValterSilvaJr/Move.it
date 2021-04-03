import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from "../components/CompletedChallenges";
import Container from "../components/Container";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { ChallengesProvider } from '../contexts/ChallengeContext';
import { CountdownProvider } from '../contexts/CountdownContext';
import { Section } from "../styles/Home/styles";

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {  
  return (
    <ChallengesProvider 
      level={props.level} 
      currentExperience={props.currentExperience} 
      challengesCompleted={props.challengesCompleted}
    >
      <Container>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />
        
        <CountdownProvider>
          <Section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;
    
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}