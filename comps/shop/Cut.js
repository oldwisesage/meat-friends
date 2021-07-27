import Link from 'next/link';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import AddToCartButton from './AddToCartButton';
import {
  color,
  boxShadow,
  borderRadius,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const CutContainer = styled.div`
  display: grid;
  border-radius: ${borderRadius.default};
  border: 0.5px solid ${color.greyPale};
  box-shadow: ${boxShadow.idle};
  &:hover {
    border: 0.5px solid ${color.greenPale};
    box-shadow: ${boxShadow.active};
  }
`;

const CutImageContainer = styled.div`
  height: 21rem;
  min-width: 20rem;
  position: relative;
  border-bottom: 0.5px solid ${color.greyPale};
`;

const CutImage = styled.img`
  border-radius: ${borderRadius.default} ${borderRadius.default} 0 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BottomContainer = styled.div`
  display: grid;
  margin: 0.5rem 0;
`;
const Title = styled.h3`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.mid};
  color: ${color.black};
  justify-self: center;
`;
const Price = styled.h3`
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.light};
  color: ${color.black};
  justify-self: center;
`;
const ButtonContainer = styled.div`
  margin: 0 0.5rem;
  display: grid;
  grid-auto-flow: column;
  align-items: baseline;
  justify-content: center;
`;

const Cut = ({ cut }) => (
  <CutContainer>
    <Link href={`/meat/${cut.id}`}>
      <CutImageContainer>
        <CutImage
          src={cut?.photo?.image?.publicUrlTransformed}
          alt={cut.name}
        />
      </CutImageContainer>
    </Link>
    <BottomContainer>
      <Title>{cut.name}</Title>
      <Price>{formatMoney(cut.price)}</Price>
      <ButtonContainer>
        <AddToCartButton id={cut.id} />
      </ButtonContainer>
    </BottomContainer>
  </CutContainer>
);

export default Cut;
