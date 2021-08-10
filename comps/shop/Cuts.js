import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { perPage } from '../../config';
import Cut from './Cut';

const ALL_CUTS_QUERY = gql`
  query ALL_CUTS_QUERY($skip: Int = 0, $first: Int) {
    allCuts(first: $first, skip: $skip) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const CutsContainer = styled.div`
  margin-top: 2.5rem;
  grid-column: 2 / -2;
  display: grid;
  justify-content: center;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-auto-flow: row;
  width: 100rem;
`;

export default function Cuts({ page }) {
  const { data, error, loading } = useQuery(ALL_CUTS_QUERY, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) {
    console.log('🕗  loading....');
    return <p>Loading</p>;
  }
  if (error) {
    console.log(`💩  ${error.message}`);
    return <p>{error.message}</p>;
  }
  return (
    <CutsContainer>
      {data.allCuts.map((cut) => (
        <Cut key={cut.id} cut={cut} />
      ))}
    </CutsContainer>
  );
}

Cuts.propTypes = {
  page: PropTypes.number,
};

export { ALL_CUTS_QUERY };
