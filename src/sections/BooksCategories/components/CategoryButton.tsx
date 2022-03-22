import styled from 'styled-components';

export const CategoryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 6px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  white-space: nowrap;
  img {
    height: 24px;
    width: 24px;
  }
  &:hover {
    background: #e6e9f5;
  }
  &.active {
    background: #e6e9f5;
    border: 1px solid #0066ff;
  }
`;
