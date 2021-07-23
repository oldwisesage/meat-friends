import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const AnimalCard = styled.div`
  height: 100%;
  width: 100%;
  padding: 0.2rem;
  &:hover {
    background: rgba($grey-pale, 0.5);
    border-radius: $border-radius;
  }
`;
const AnimalImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${borderRadius.default};
  background-color: ${color.greyPale};
`;

const AnimalTitle = styled.h3`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.heavy};
`;

const Animal = ({ title }) => (
  <Link href="/meats/beef">
    <AnimalCard>
      <AnimalImage />
      <AnimalTitle>{title}</AnimalTitle>
    </AnimalCard>
  </Link>
);

export default Animal;
