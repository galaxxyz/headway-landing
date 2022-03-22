import styled from 'styled-components';
import { Player } from '@lottiefiles/react-lottie-player';
import { SectionContainer, SectionHeading } from '../../components';
import img from './BecomeBetterYou.png';
import lottie from './lottie.json';

const SectionContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  column-gap: 40px;
  svg {
    max-width: 327px;
    margin: 0px;
  }
  img {
    position: relative;
    bottom: -25px;
    max-width: 100%;
    width: 327px;
  }
`;

export function Hero() {
  return (
    <SectionContainer>
      <SectionHeading>
        <h2>Become a better you</h2>
        <p>
          with 15-min bite-sized reads and audios of the world’s best nonfiction
          books
        </p>
      </SectionHeading>
      <SectionContent>
        <Player autoplay keepLastFrame src={lottie} />
        <img src={img} alt="Become a better you" />
      </SectionContent>
    </SectionContainer>
  );
}
