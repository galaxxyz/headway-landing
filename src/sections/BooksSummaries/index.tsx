import styled from 'styled-components';
import { SectionContainer, SectionHeading } from '../../components';
import Book from './Book.svg';
import iPhone from './iPhone.svg';
import Arrow1 from './Arrow1.svg';
import Arrow2 from './Arrow2.svg';

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  #Book {
    width: 256px;
    height: 168px;
  }
  #iPhone {
    width: 256px;
    height: 168px;
  }
  #Arrow1 {
    height: 77px;
  }
  #Arrow2 {
    height: 77px;
  }
  p.secondary {
    color: rgba(0, 0, 0, 0.4);
  }
`;

export function BooksSummaries() {
  return (
    <SectionContainer bgColor="#FFEDE1" borderColor="rgba(255, 136, 51, 0.2)">
      <SectionHeading>
        <h2>Summary is the new black</h2>
        <p>
          Use summaries: comprehensive 15-min abstracts from nonfiction books
          with the main concepts and recommendations.
        </p>
      </SectionHeading>
      <SectionContent>
        <img src={Book} alt="Book" id="Book" />
        <p>Typical book</p>
        <p className="secondary">320 pages ~ 20 hours</p>
        <img src={Arrow1} alt="Arrow1" id="Arrow1" />
        <p>Key ideas & insights</p>
        <img src={Arrow2} alt="Arrow2" id="Arrow2" />
        <img src={iPhone} alt="iPhone" id="iPhone" />
        <p>Summary</p>
        <p className="secondary">~ 15 minutes</p>
      </SectionContent>
    </SectionContainer>
  );
}
