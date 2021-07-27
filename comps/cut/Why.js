import styled from 'styled-components';
import { spacing, fontSize, fontWeight } from '../../theme/Variables';

// TODO add this content in to cut specifics in database then render
const WhySection = styled.section`
  max-height: 40rem;
  max-width: 100rem;
`;

const WhyContainer = styled.div`
  display: grid;
  grid-gap: ${spacing.more};
  grid-template-columns: repeat(2, 50rem);
`;

const ContentContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  align-content: flex-start;
`;

const QuestionAnswerContainer = styled.div`
  margin: 1rem 0;
`;

const Question = styled.h4`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.book};
`;

const Answer = styled.p`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.light};
`;

const BestCookMethods = styled.div`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.body};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const CookMethod = styled.div`
  display: flex;
  align-items: baseline;
  font-weight: ${fontWeight.book};
  justify-content: flex-start;
  padding-left: 0.25rem;
  h3 {
    margin-right: 0.25rem;
  }
  p {
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.body};
  }
`;

const IllustrationContainer = styled.div`
  width: 100%;
`;

const Blob = styled.svg`
  overflow: visible;
  size: 30rem;
  position: absolute;
`;

const Why = () => (
  <WhySection>
    <WhyContainer>
      <ContentContainer>
        <QuestionAnswerContainer>
          <Question>Best methods to cook?</Question>
          <BestCookMethods>
            <CookMethod>
              <h3>🔥</h3>
              <p>Grill</p>
            </CookMethod>
            <CookMethod>
              <h3>🥘</h3>
              <p>Braise</p>
            </CookMethod>
            <CookMethod>
              <h3>🍳</h3>
              <p>Pan Roast</p>
            </CookMethod>
          </BestCookMethods>
        </QuestionAnswerContainer>
        <QuestionAnswerContainer>
          <Question>Why is it so good?</Question>
          <Answer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est facere
            obcaecati non nam dignissimos veritatis ipsa esse illo totam nemo
            commodi possimus.
          </Answer>
        </QuestionAnswerContainer>
        <QuestionAnswerContainer>
          <Question>Where is it from?</Question>
          <Answer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            placeat, non.
          </Answer>
        </QuestionAnswerContainer>
      </ContentContainer>
      <IllustrationContainer>
        <Blob viewBox="50 50 180 180" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#adadad"
            d="M38.4,-52C52.2,-42.8,67.6,-34.9,77.1,-21.3C86.6,-7.8,90.2,11.3,81.9,23.5C73.6,35.6,53.5,40.8,37.9,51.6C22.2,62.5,11.1,79.2,-1.1,80.7C-13.3,82.2,-26.6,68.5,-35.8,55.6C-45.1,42.6,-50.4,30.3,-54.1,17.8C-57.8,5.3,-59.9,-7.4,-55.8,-17.6C-51.7,-27.7,-41.5,-35.3,-31.1,-45.6C-20.8,-55.9,-10.4,-69,0.9,-70.3C12.3,-71.6,24.6,-61.1,38.4,-52Z"
            transform="translate(100 100)"
          />
        </Blob>
      </IllustrationContainer>
    </WhyContainer>
  </WhySection>
);

export default Why;
