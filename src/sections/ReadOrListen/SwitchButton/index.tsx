import styled from 'styled-components';
import { ReactComponent as Audio } from './audio.svg';
import { ReactComponent as Text } from './text.svg';

const Switcher = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 3px;
  margin: 0;
  width: 110px;
  height: 56px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 40px;
`;

const Option = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  border-radius: 40px;
  padding: auto;
  background-color: ${(props: OptionProps) => props.background};
  transition: 300ms;
  transition-timing-function: ease;
  svg {
    margin: auto;
  }
  svg path {
    color: ${(props: OptionProps) => props.color};
    fill: currentcolor;
  }
`;

interface OptionProps {
  color: string;
  background: string;
}

function SwitchButton({
  currentOption,
  setCurrentOption,
}: {
  currentOption: 'listen' | 'read';
  setCurrentOption: (value: React.SetStateAction<'listen' | 'read'>) => void;
}) {
  const optionStyles = {
    listen: {
      AudioColor: '#ffffff',
      AudioBg: '#0066FF',
      TextColor: '#000000',
      TextBg: '#ffffff',
    },
    read: {
      AudioColor: '#000000',
      AudioBg: '#ffffff',
      TextColor: '#ffffff',
      TextBg: '#0066FF',
    },
  };
  return (
    <Switcher
      type="button"
      onClick={() => {
        setCurrentOption(currentOption === 'listen' ? 'read' : 'listen');
      }}
    >
      <Option
        color={optionStyles[currentOption].AudioColor}
        background={optionStyles[currentOption].AudioBg}
      >
        <Audio />
      </Option>
      <Option
        color={optionStyles[currentOption].TextColor}
        background={optionStyles[currentOption].TextBg}
      >
        <Text />
      </Option>
    </Switcher>
  );
}

export default SwitchButton;
