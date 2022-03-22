import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  height: 56px;
  background: #0066ff;
  border: none;
  border-radius: 8px;
  position: fixed;
  bottom: 24px;
  left: 16px;
  right: 16px;
  margin: auto;

  color: #ffffff;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;

  &:hover {
    background: #0155d3;
  }
`;

export function MainButton() {
  return <Button>Get Started</Button>;
}
