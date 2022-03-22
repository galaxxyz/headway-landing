import styled from 'styled-components';
import { useState } from 'react';
import { SectionContainer, SectionHeading } from '../../components';
import SwitchButton from './SwitchButton';
import listenImg from './listen.png';
import readImg from './read.png';

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 40px;
  img {
    position: relative;
    bottom: -25px;
    max-width: 100%;
    width: 327px;
  }
`;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  margin-top: 16px;
`;

export function ReadOrListen() {
  const [currentOption, setCurrentOption] = useState<'listen' | 'read'>(
    'listen',
  );

  return (
    <SectionContainer
      bgColor="rgba(255, 51, 51, 0.1)"
      borderColor="rgba(255, 51, 51, 0.1)"
    >
      <SectionContent>
        <SectionHeading>
          <h2>Read or Listen</h2>
          <p>
            Commuting, jogging, or stuck in line? Enjoy the best books in a
            condensed format. Summaries have an audio version, narrated by
            professional voice actors.
          </p>
        </SectionHeading>
        <SwitchContainer>
          <p>Listen</p>
          <SwitchButton
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
          />
          <p>Read</p>
        </SwitchContainer>
        {currentOption === 'listen' ? (
          <img src={listenImg} alt="Listen" />
        ) : (
          <img src={readImg} alt="Read" />
        )}
      </SectionContent>
    </SectionContainer>
  );
}
