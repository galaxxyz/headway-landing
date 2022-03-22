import styled from 'styled-components';
import { SectionContainer, SectionHeading } from '../../components';
import reviews from './reviewsData';
import ReviewCard from './components/ReviewCard';
import DownloadSection from './components/DownloadSection';

const SectionContent = styled.div``;

const ReviewSection = styled.div`
  column-count: 3;
  @media (max-width: 991px) {
    column-count: 2;
  }
  @media (max-width: 767px) {
    column-count: 1;
  }
  .reviewCard {
    margin-bottom: 16px;
  }
`;

export function Reviews() {
  return (
    <SectionContainer bgColor="#E6E9F5" borderColor="rgba(0, 102, 255, 0.2)">
      <SectionHeading>
        <h2>People love the Headway app</h2>
        <p>
          Become a member of our global community of
          <span style={{ color: '#0066FF' }}> 7 million people</span>
        </p>
      </SectionHeading>
      <SectionContent>
        <ReviewSection>
          {reviews.map((r) => (
            <ReviewCard
              key={r.nickname}
              photo={r.photo}
              comment={r.comment}
              nickname={r.nickname}
            />
          ))}
        </ReviewSection>
        <DownloadSection />
      </SectionContent>
    </SectionContainer>
  );
}
