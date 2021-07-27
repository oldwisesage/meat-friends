import { useRouter } from 'next/router';
import styled from 'styled-components';
import Cuts from '../../comps/shop/Cuts';
import Pagination from '../../comps/shop/Pagination';
import Heading from '../../comps/Heading';

const MeatsContainer = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: 25rem 1fr 25rem;
  min-height: 80vh;
`;

const MeatsTitleContainer = styled.div`
  grid-column: 2 /-2;
  grid-row: 1;
  display: flex;
  justify-content: space-between;
`;

export default function Meat() {
  const { query } = useRouter();
  const page = parseInt(query.page);
  return (
    <MeatsContainer>
      <MeatsTitleContainer>
        <Heading title="Beef" subtitle="Locally sourced beef" />
        <Pagination page={page || 1} />
      </MeatsTitleContainer>
      <Cuts page={page || 1} />
    </MeatsContainer>
  );
}
