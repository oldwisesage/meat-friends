import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import Cut from '../shop/Cut';
import Heading from '../Heading';

// TODO Figure out some sort of algorithm that will bring in cuts that are similar

const OTHER_CUTS_QUERY = gql`
  query {
    allCuts(first: 4) {
      id
      name
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const CutsSection = styled.section`
  min-height: 25rem;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
`;

const CutsContainer = styled.div`
  grid-template-columns: repeat(4, 1fr);
  margin-top: 2.5rem;
  grid-column: 2 / -2;
  display: grid;
  justify-content: center;
  grid-gap: 2.5rem;
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: row;
  width: 100rem;
`;

export default function OtherCuts() {
  const { data, error, loading } = useQuery(OTHER_CUTS_QUERY);
  // TODO add loading & error situation here
  if (loading) return <p>Loading....</p>;
  const cuts = data.allCuts;
  console.log(data);
  return (
    <CutsSection>
      <Heading
        title="Other Cuts"
        subtitle="Similar cuts you are currently looking at"
      />
      <CutsContainer>
        {cuts.map((cut) => (
          <Cut key={cut.id} cut={cut} />
        ))}
      </CutsContainer>
    </CutsSection>
  );
}
