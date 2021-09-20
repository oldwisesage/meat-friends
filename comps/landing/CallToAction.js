import styled from 'styled-components';
import { color, fontSize, fontWeight, spacing } from '../../theme/Variables';
import { Button } from '../ui/Form';
import { LandingContainer } from './HowItWorksSection';

const CtaContainer = styled(LandingContainer)`
  grid-area: cta;
  display: grid;
  align-content: end;
  justify-content: start;
  min-height: 70rem;
`;

const InnerContainer = styled.div`
  padding: 5rem;
  max-width: 100rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
`;
const Header = styled.h2`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.heavy};
`;
const Text = styled.p`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.light};
`;
const ButtonContainer = styled.div`
  padding-top: ${spacing.skinny};
  display: grid;
  grid-template-columns: auto 2fr auto 1fr;
`;

const HowItWorks = styled.button`
  justify-self: center;
  text-decoration: none;
  border: none;
  border-bottom: 2.5px solid black;
  margin-bottom: 0.25rem;
  background-color: transparent;
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.heavy};
  & :hover {
    color: red;
    border-bottom: 2.5px solid red;
  }
`;

const ShapesBackground = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
`;

const Image = styled.img`
  background-color: red;
  width: 600px;
  height: 400px;
  border-radius: 10px;
  position: relative;
  top: 50px;
  left: 780px;
`;
const Graybox = styled.div`
  background-color: ${color.greyPale};
  width: 405px;
  height: 283px;
  position: absolute;
  border-radius: 10px;
  top: 20px;
  left: 680px;
`;

const Graybox2 = styled.div`
  background-color: ${color.greyPale};
  width: 223px;
  height: 353px;
  position: absolute;
  border-radius: 10px;
  top: 240px;
  left: 1190px;
`;

const Bluebox = styled.div`
  background-color: ${color.bluePale};
  width: 156px;
  height: 126px;
  position: absolute;
  border-radius: 10px;
  top: 80px;
  left: 600px;
  z-index: -9;
`;
const Bluebox2 = styled.div`
  background-color: ${color.bluePale};
  width: 147px;
  height: 114px;
  position: absolute;
  border-radius: 10px;
  top: 540px;
  left: 1120px;
  z-index: -9;
`;
const Greenbox = styled.div`
  background-color: ${color.greenPale};
  width: 243px;
  height: 196px;
  position: absolute;
  border-radius: 10px;
  top: 160px;
  left: 450px;
  z-index: -10;
`;
const Greenbox2 = styled.div`
  background-color: ${color.greenPale};
  width: 243px;
  height: 196px;
  position: absolute;
  border-radius: 10px;
  top: 320px;
  left: 1000px;
  z-index: -10;
`;

const CallToAction = () => (
  <CtaContainer>
    <ShapesBackground>
      <Graybox />
      <Graybox2 />
      <Bluebox />
      <Bluebox2 />
      <Greenbox />
      <Greenbox2 />
      <Image src="https://res.cloudinary.com/meat-friends/image/upload/v1631815925/meat-friends/photo-1615937662601-4724eceda00f_tdaoxg.webp" />
    </ShapesBackground>

    <InnerContainer>
      <Header>Your friendly neighborhood butcher.</Header>
      <Text>Delivered with the magic and convience of the internet.</Text>
      <ButtonContainer>
        <Button type="button">Get started</Button>
        <HowItWorks type="button">How it works →</HowItWorks>
      </ButtonContainer>
    </InnerContainer>
  </CtaContainer>
);

export default CallToAction;
