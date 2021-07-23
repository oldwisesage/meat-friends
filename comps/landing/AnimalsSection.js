// import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Heading from '../Heading';
import Animal from './Animal';
import { LandingContainer } from './HowItWorksSection';

// const OTHER_CUTS_QUERY = gql`
//   query {
//     allCuts(first: 4) {
//       id
//       name
//       price
//       photo {
//         id
//         image {
//           publicUrlTransformed
//         }
//       }
//     }
//   }
// `;

const AnimalContainer = styled(LandingContainer)`
  grid-area: shop;
  display: grid;
  min-width: 100vw;
  min-height: 50rem;
  padding: 5rem;
  grid-template-rows: auto 1fr;
`;
const AnimalCardContainer = styled.div`
  margin-top: 2.5rem;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, 1fr);
`;

// TODO Add query for different animals here
const animals = ['Beef', 'Lamb', 'Pork', 'Chicken'];

const AnimalsSection = () => (
  <AnimalContainer>
    <Heading title="Favorite variety of meat?" />
    <AnimalCardContainer>
      {animals.map((animal, index) => (
        <Animal title={animal} key={index} />
      ))}
    </AnimalCardContainer>
  </AnimalContainer>
);
export default AnimalsSection;
