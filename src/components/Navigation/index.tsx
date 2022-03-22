import styled from 'styled-components';
import logo from '../../shared/logo.svg';
import NavButton from './NavButton';
import { menu, userpic } from './icons';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 8px;
`;

export function Navigation() {
  return (
    <NavContainer>
      <img src={logo} alt="logo" />
      <ButtonsContainer>
        <NavButton icon={menu} alt="menu" />
        <NavButton icon={userpic} alt="userpic" />
      </ButtonsContainer>
    </NavContainer>
  );
}
