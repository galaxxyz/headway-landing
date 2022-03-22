import styled from 'styled-components';
import { SectionContainer, SectionHeading } from '../../components';
import imgLearnFromBest from './LearnFromBest.png';
import imgGetInsights from './GetInsights.png';
import imgBuildHabit from './BuildHabit.png';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  text-align: center;
  max-width: 327px;
  img {
    max-width: 100%;
  }
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: center;
  row-gap: 32px;
  column-gap: 24px;
  flex-basis: 30%;
  flex-wrap: wrap;
`;

export function About() {
  return (
    <SectionContainer bgColor="#E6F2E7" borderColor="rgba(0, 187, 119, 0.4)">
      <SectionHeading>
        <h2>Get smarter with the least effort</h2>
      </SectionHeading>
      <SectionContent>
        <Card>
          <img src={imgLearnFromBest} alt="Learn from the best" />
          <h3>Learn from the best</h3>
          <p>
            Highlighted by top reviewers, we picked only the most outstanding
            bestsellers for you.
          </p>
        </Card>
        <Card>
          <img src={imgGetInsights} alt="Get key insights" />
          <h3>Get key insights</h3>
          <p>Major ideas in a bite-sized form. Long reads no more!</p>
        </Card>
        <Card>
          <img src={imgBuildHabit} alt="Build a reading habit" />
          <h3>Build a reading habit</h3>
          <p>
            Consistency is the key to top performance. Only 15 minutes per day
            to make reading your brand new habit!
          </p>
        </Card>
      </SectionContent>
    </SectionContainer>
  );
}
