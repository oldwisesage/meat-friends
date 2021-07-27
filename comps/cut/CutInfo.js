import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
  spacing,
} from '../../theme/Variables';
import AddToCartQuantityButton from './AddToCartQuantityButton';

const CutInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50rem);
  grid-gap: ${spacing.more};
  margin-top: ${spacing.more};
`;

const CutImage = styled.img`
  border-radius: ${borderRadius.default};
  max-height: 40rem;
  display: grid;
  justify-self: center;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  display: grid;
  align-content: center;
  grid-gap: ${spacing.less};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.div`
  font-size: ${fontSize.h2};
  font-weight: ${fontWeight.bold};
`;

const Price = styled.div`
  font-size: ${fontSize.h3};
  font-weight: ${fontWeight.base};
  padding-right: ${spacing.more};
  color: ${color.redDark};
`;
const Size = styled.div`
  color: ${color.greyDark};
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.light};
`;

const Rating = styled.div`
  font-size: ${fontSize.h3};
  margin-top: ${spacing.less};
`;

const Desc = styled.div`
  font-size: ${fontSize.body};
  margin-top: ${spacing.base};
`;

const CutInfo = ({ cut }) => (
  <CutInfoContainer>
    <CutImage
      src={cut.photo.image.publicUrlTransformed}
      alt={cut.photo.image.altText}
    />
    <InfoContainer>
      <TopContainer>
        <Title>{cut.name}</Title>
        <Price>{formatMoney(cut.price)}</Price>
      </TopContainer>
      {/* TODO add size into database */}
      <Size># oz. or # lbs.</Size>
      {/* TODO add some sort of rating system into database & some sort of reflction via ui */}
      <Rating>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</Rating>
      <Desc>{cut.description}</Desc>
      <AddToCartQuantityButton />
    </InfoContainer>
  </CutInfoContainer>
);
export default CutInfo;
