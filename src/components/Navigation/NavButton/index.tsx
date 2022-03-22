import styled from 'styled-components';

const StyledButton = styled.button`
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
  &:hover img {
    transform: scale(0.95);
  }
`;

function NavButton({ icon, alt }: { icon: string; alt: string }) {
  return (
    <StyledButton type="button">
      <img src={icon} alt={alt} />
    </StyledButton>
  );
}

export default NavButton;
