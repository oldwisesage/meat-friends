import { useState } from 'react';
import styled from 'styled-components';
import { border, color, fontSize, fontWeight } from '../theme/Variables';

const FaqContainer = styled.div`
  padding: 2.5rem 1rem;
  transition: all 0.2 ease;
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
    transition: transform 0.2s ease;
    ${(props) => (props.active ? `transform: rotate(90deg)` : null)};
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
  width: 84.4rem;
  visibility: hidden;
  position: absolute;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.1s, 0.1s transform, visibility 0.1s;
  ${(props) =>
    props.active
      ? `transform: translateY(0); opacity: 1; visibility: visible; position: static;`
      : null};
`;

const FaqItem = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  const showAnswer = () => setIsActive(!isActive);

  return (
    <FaqContainer>
      <QuestionContainer>
        <Icon type="button" onClick={showAnswer} active={isActive}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
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
      <Answer active={isActive}>{answer}</Answer>
    </FaqContainer>
  );
};
export default FaqItem;
