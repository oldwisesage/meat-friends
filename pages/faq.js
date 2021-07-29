import { useState } from 'react';
import styled from 'styled-components';
import FaqItem from '../comps/FaqItem';
import Heading from '../comps/Heading';
import { color } from '../theme/Variables';

const FaqSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background: ${color.white};
`;

const FaqContainer = styled.div`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  grid-column: 2;
`;

const FaqHeading = styled(Heading)`
  grid-column: 2;
`;

const Padding = styled.div`
  padding-top: 2.5rem;
`;

const FaqPage = () => (
  <FaqSection>
    <FaqContainer>
      <FaqHeading
        title="Frequently Asked Questions"
        subtitle="Here are the answers to our most commonly asked questions"
      />
      <Padding />
      <FaqItem
        active
        question="How will my order be shipped?"
        answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo esse quia corrupti quas sequi est. Cupiditate doloribus natus quod placeat."
      />
      <FaqItem
        question="What is the best part of meat friends?"
        answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo esse quia corrupti quas sequi est. Cupiditate doloribus natus quod placeat."
      />
      <FaqItem
        question="Why is grassfed so significantly better?"
        answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo esse quia corrupti quas sequi est. Cupiditate doloribus natus quod placeat."
      />
      <FaqItem
        question="How do I learn more about the farms you source from?"
        answer="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo esse quia corrupti quas sequi est. Cupiditate doloribus natus quod placeat."
      />
    </FaqContainer>
  </FaqSection>
);

FaqPage.layout = 'pic';

export default FaqPage;
