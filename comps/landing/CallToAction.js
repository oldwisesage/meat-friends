import styled from 'styled-components';
import { fontSize, fontWeight, padding } from '../../theme/Variables';
import { Button } from '../ui/Form';
import { LandingContainer } from './HowItWorksSection';

// TODO implement some sort of dynamic functionality

const CtaContainer = styled(LandingContainer)`
  grid-area: cta;
  display: grid;
  align-content: end;
  justify-content: start;
  min-height: 60rem;
`;
const InnerContainer = styled.div`
  padding: 5rem;
  max-width: 65rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
`;
const Header = styled.h2`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.heavy};
`;
const Subtitle = styled.h3`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.mid};
`;
const Text = styled.p`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.light};
`;
const ButtonContainer = styled.div`
  padding-top: ${padding.skinny};
`;

const CallToAction = () => (
  <CtaContainer>
    <InnerContainer>
      <Header>Try this out</Header>
      <Subtitle>Some sort of heading</Subtitle>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit</Text>
      <ButtonContainer>
        <Button type="button">Click me!</Button>
      </ButtonContainer>
    </InnerContainer>
  </CtaContainer>
);

export default CallToAction;
