import styled from 'styled-components';
import Card from '../Card';
import { star, star07, star02, AppStore, GooglePlay } from '../../icons';

const Download = styled.div`
  display: flex;
  flex-basis: 50%;
  column-gap: 12px;
`;

const Stars = styled.div`
  margin-right: 2px;
`;

const DownloadCard = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
`;

const NumberMarketIcon = styled.div`
  display: flex;
  column-gap: 8px;
  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 130%;
  }
  img {
    width: 32px;
    height: 32px;
  }
`;

function DownloadSection() {
  return (
    <Download>
      <DownloadCard>
        <NumberMarketIcon>
          <p style={{ color: '#0066FF' }}>4.7</p>
          <img src={AppStore} alt="AppStore" />
        </NumberMarketIcon>
        <Stars>
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star07} alt="star" className="icon" />
        </Stars>
        <p>50K ratings</p>
      </DownloadCard>
      <DownloadCard>
        <NumberMarketIcon>
          <p style={{ color: '#00BB77' }}>4.2</p>
          <img src={GooglePlay} alt="GooglePlay" />
        </NumberMarketIcon>
        <Stars>
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star} alt="star" className="icon" />
          <img src={star02} alt="star" className="icon" />
        </Stars>
        <p>31k ratings</p>
      </DownloadCard>
    </Download>
  );
}

export default DownloadSection;
