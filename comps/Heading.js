import styled from 'styled-components';
import { fontSize, fontWeight } from '../theme/Variables';

const HeadingContainer = styled.div`
  display: block;
`;
const Title = styled.h1`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.heavy};
  margin: 0;
`;
const Subtitle = styled.h3`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.book};
`;
const Subtext = styled.h4`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.light};
`;

const Heading = ({ title, subtitle, subtext }) => (
  <HeadingContainer>
    <Title>{title}</Title>
    {subtitle ? <Subtitle>{subtitle}</Subtitle> : null}
    <Subtext>{subtext}</Subtext>
  </HeadingContainer>
);

export default Heading;
