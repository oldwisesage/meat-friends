import Image from 'next/image';
import styled from 'styled-components';
import Heading from '../comps/Heading';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../theme/Variables';

const AboutSection = styled.section`
  min-height: 100rem;
  position: relative;
`;

const AboutContainer = styled.div`
  margin: 0 20rem;
  position: relative;
  z-index: 1;
`;

const Illustration = styled.div`
  background-color: ${color.greenDark};
  background-image: url('https://images.unsplash.com/photo-1580196969807-cc6de06c05be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');
  background-blend-mode: screen;
  min-height: 60rem;
  width: 100%;
  background-size: cover;
  border-radius: ${borderRadius.default};
  z-index: 10;
`;

const InfoBox = styled.div`
  width: 40rem;
  background-color: ${color.greyPale};
  box-shadow: ${boxShadow.idle};
  padding: 2.5rem;
  position: absolute;
  border-radius: ${borderRadius.default};
`;

const WhyWeDoThis = styled(InfoBox)`
  top: 45rem;
  left: 10rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.light};
`;

const TimelineContainer = styled.div`
  position: aboslute;
  background-color: ${color.greenDark};
  transform: translateY(-30rem);
  height: 100rem;
  z-index: 1;
`;

const AboutPage = () => (
  <AboutSection>
    <AboutContainer>
      <Heading title="Your friendly neighborhood butcher" />
      <Illustration />
      <WhyWeDoThis>
        <Heading subtitle="Why we do this" />
        <Paragraph>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          qui sapiente incidunt similique.
        </Paragraph>
      </WhyWeDoThis>
    </AboutContainer>
  </AboutSection>
);

export default AboutPage;
