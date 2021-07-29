import styled from 'styled-components';
import { border, color, fontSize, fontWeight } from '../theme/Variables';

const FaqContainer = styled.div`
  padding: 2.5rem 1rem;
  border-top: ${border.thicker};
`;

const QuestionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: flex-start;
`;

const Icon = styled.button`
  background: none;
  border: none;
  svg {
    margin-right: 2.5rem;
  }
`;

const Question = styled.h3`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.book};
`;

const Answer = styled.p`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.light};
  color: ${color.greyDark};
  padding: 1rem 5rem;
`;

const FaqItem = ({ active, question, answer }) => (
  <FaqContainer>
    <QuestionContainer>
      <Icon type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </Icon>
      <Question>{question}</Question>
    </QuestionContainer>
    {active ? <Answer>{answer}</Answer> : null}
  </FaqContainer>
);
export default FaqItem;
