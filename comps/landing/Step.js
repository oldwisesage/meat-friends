import styled from 'styled-components';
import { borderRadius, fontSize } from '../../theme/Variables';

const StepContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 2.5rem;
  width: 50%;
`;
const StepImage = styled.div`
  border-radius: ${borderRadius.default};
  height: 30rem;
  width: 30rem;
`;

const ContentContainer = styled.div`
  display: grid;
  place-items: center center;
`;

const StepTitle = styled.h3`
  font-size: ${fontSize.h3};
`;

const Number = styled.div`
  font-size: ${fontSize.xl};
`;

const Step = ({ number, whatStep }) => (
  <StepContainer>
    <Number>{number}</Number>
    <StepImage />
    <ContentContainer>
      <StepTitle>{whatStep}</StepTitle>
    </ContentContainer>
  </StepContainer>
);
export default Step;
