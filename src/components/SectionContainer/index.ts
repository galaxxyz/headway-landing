import styled from 'styled-components';

interface SectionProps {
  borderColor?: string;
  bgColor?: string;
}

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px 16px;
  margin: 0px 8px 8px;
  border-radius: 12px;
  border: 1px solid
    ${(props: SectionProps) => props.borderColor || 'rgba(0, 0, 0, 0.1)'};
  box-sizing: border-box;
  background: ${(props: SectionProps) => props.bgColor || '#FFFFFF;'};
`;
