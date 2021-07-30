import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Logo from '../comps/Logo';
import Heading from '../comps/Heading';
import { fontSize, fontWeight } from '../theme/Variables';

const ErrorContainer = styled.div`
  position: relative;
  overflow: hidden;
  max-height: 100vh;
`;
const MessageContainer = styled.div`
  position: absolute;
  display: grid;
  top: 325px;
  left: 40%;
`;
const FourOhFour = styled.h1`
  font-size: ${fontSize.xxl};
  span {
    font-weight: ${fontWeight.light};
  }
`;
const Illustration = styled.div`
  position: aboslute;
`;

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  });
  return (
    <ErrorContainer>
      <Logo />
      <MessageContainer>
        <Heading
          title={
            <FourOhFour>
              <span>Error </span>404
            </FourOhFour>
          }
          subtitle="It looks like you might be lost"
          subtext="You will be returned to the home page in 2 seconds"
        />
      </MessageContainer>
      <Illustration>
        <svg viewBox="0 25 300 300" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#ADADAD"
            d="M48.7,-36C60.3,-24.2,65.1,-4.1,62.7,17.5C60.3,39.1,50.7,62.2,35,67.9C19.3,73.6,-2.4,61.9,-22.9,50.8C-43.4,39.7,-62.7,29.2,-67.2,14C-71.6,-1.1,-61.3,-20.9,-47.7,-33.2C-34,-45.4,-17,-50.1,0.7,-50.7C18.5,-51.3,37,-47.8,48.7,-36Z"
            transform="translate(100 100)"
          />
        </svg>
      </Illustration>
    </ErrorContainer>
  );
};

NotFound.layout = 'no';

export default NotFound;
