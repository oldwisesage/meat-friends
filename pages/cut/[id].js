import { useRouter } from 'next/router';
import styled from 'styled-components';
import SingleCut from '../../comps/cut/SingleCut';

const SingleCutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
`;
const SingleCutPage = () => {
  const { query } = useRouter();
  return (
    <SingleCutSection>
      <SingleCut id={query.id} />
    </SingleCutSection>
  );
};

export default SingleCutPage;
