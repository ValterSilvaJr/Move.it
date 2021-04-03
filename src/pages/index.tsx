import Head from 'next/head';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from "../components/CompletedChallenges";
import Container from "../components/Container";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';
import { Section } from "./Home/styles";

export default function Home() {
  return (
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
  )
}
