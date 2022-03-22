import styled from 'styled-components';
import { SectionContainer } from '../SectionContainer';
import logo from '../../shared/logo.svg';
import { instagram, facebook, twitter } from './icons';

const FooterContainer = styled(SectionContainer)`
  text-align: center;
  @media (max-width: 767px) {
    align-items: flex-start;
    text-align: start;
  }
  .logo {
    height: 24px;
  }
`;

const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const SocialMediasIcons = styled.div`
  img {
    width: 24;
    height: 24;
    padding-right: 12px;
  }
`;

export function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="logo" className="logo" />
      <h2>Empower yourself with the best books insights</h2>
      <SocialMedias>
        <p>Social media:</p>
        <SocialMediasIcons>
          <a href="https://facebook.com">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://instagram.com">
            <img src={instagram} alt="instagram" />
          </a>
          <a href="https://twitter.com">
            <img src={twitter} alt="twitter" />
          </a>
        </SocialMediasIcons>
      </SocialMedias>
    </FooterContainer>
  );
}
