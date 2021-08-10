import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
  spacing,
} from '../../theme/Variables';
import Heading from '../Heading';

const SettingsSection = styled.section``;

const SettingsContainer = styled.div`
  border: ${border.base};
  border-radius: ${borderRadius.default};
  padding: ${spacing.base};
  display: grid;
  grid-gap: ${spacing.base};
  min-height: 25rem;
`;

const Label = styled.h4`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.light};
  align-self: center;
`;

const Setting = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const OptionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center flex-start;
  grid-gap: ${spacing.base};
`;

const OptionButton = styled.button`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.light};
  box-shadow: ${boxShadow.default};
  padding: 0.5rem 1rem;
  background-color: rgba(${color.greyPale}, 0.4);
  border-radius: ${borderRadius.default};
  text-decoration: none;
  border: none;
  &:hover {
    background-color: ${color.greyPale};
  }
  &:active {
    background-color: ${color.greyMid};
  }
`;

const Settings = ({ active }) => {
  if (!active) return null;
  return (
    <SettingsSection>
      <Heading title="Settings" />
      <SettingsContainer>
        <Setting>
          <Label>Dark mode:</Label>
          <OptionContainer>
            <OptionButton type="button">Light</OptionButton>
            <OptionButton type="button">Dark</OptionButton>
            <OptionButton type="button">System</OptionButton>
          </OptionContainer>
        </Setting>
        <Setting>
          <Label>Animation mode:</Label>
          <OptionContainer>
            <OptionButton type="button">Low</OptionButton>
            <OptionButton type="button">High</OptionButton>
          </OptionContainer>
        </Setting>
        <Setting>
          <Label>Font size:</Label>
          <OptionContainer>
            <OptionButton type="button">Standard</OptionButton>
            <OptionButton type="button">Large</OptionButton>
            <OptionButton type="button">I can't read</OptionButton>
          </OptionContainer>
        </Setting>
      </SettingsContainer>
    </SettingsSection>
  );
};

Settings.propTypes = {
  active: PropTypes.bool,
};

export default Settings;
