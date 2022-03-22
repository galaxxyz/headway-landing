import styled from 'styled-components';
import Card from '../Card';
import { instagram, star } from '../../icons';

const Review = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const Stars = styled.div`
  margin-right: 2px;
`;

const ImageNickname = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: rgba(0, 0, 0, 0.4);
  img {
    width: 32px;
    height: 32px;
  }
`;

const NicknameIcon = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

function ReviewCard({
  photo,
  nickname,
  comment,
}: {
  photo: string;
  nickname: string;
  comment: string;
}) {
  return (
    <Card className="reviewCard">
      <Review>
        <ReviewText>
          <Stars>
            <img src={star} alt="star" className="icon" />
            <img src={star} alt="star" className="icon" />
            <img src={star} alt="star" className="icon" />
            <img src={star} alt="star" className="icon" />
            <img src={star} alt="star" className="icon" />
          </Stars>
          <p>{comment}</p>
        </ReviewText>
        <ImageNickname>
          <img src={photo} alt={nickname} />
          <NicknameIcon>
            <p>{nickname}</p>
            <img src={instagram} alt="instagram" className="icon" />
          </NicknameIcon>
        </ImageNickname>
      </Review>
    </Card>
  );
}

export default ReviewCard;
