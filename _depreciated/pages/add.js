import styled from 'styled-components';
import CreateCut from '../comps/crud/CreateCut';

const Container = styled.div`
  height: 50rem;
  display: grid;
  place-items: center;
`;

export default function AddPage() {
  return (
    <Container>
      <CreateCut />
    </Container>
  );
}
