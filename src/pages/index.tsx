import Head from 'next/head';
import CompletedChallenges from "../components/CompletedChallenges";
import Container from "../components/Container";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { Section } from "./Home/styles";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      
      <Section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div></div>
      </Section>

    </Container>
  )
}
