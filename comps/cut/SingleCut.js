import { useQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import DisplayError from '../error/ErrorMessage';
import CutInfo from './CutInfo';
import OtherCuts from './OtherCuts';
import Why from './Why';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Cut(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const SingleCutSection = styled.section`
  grid-column: 2 / -2;
  max-width: 100vw;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: 1fr;
`;

const SingleCut = ({ id }) => {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });
  if (loading) return <p>Loading.... </p>;
  if (error) return <DisplayError error={error} />;
  const { Cut } = data;

  return (
    <SingleCutSection>
      <CutInfo cut={Cut} />
      <Why />
      <OtherCuts />
    </SingleCutSection>
  );
};
export default SingleCut;
