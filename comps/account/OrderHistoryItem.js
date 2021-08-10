import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import formatMoney from '../../lib/formatMoney';
import { color, fontSize, fontWeight } from '../../theme/Variables';

const ItemRowContainer = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(2, 1fr) repeat(2, 2fr) 1fr;
  &:hover {
    background: ${color.greyPale};
  }
  &:active {
    background: ${color.white};
  }
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.caption};
    font-weight: ${fontWeight.light};
  }
`;

const OrderId = styled.p``;
const OrderDate = styled.p``;
const OrderStatus = styled.div`
  p {
    font-weight: ${fontWeight.bold};
    border-radius: 50px;
    color: ${color.greenDark};
    background-color: ${color.greenPale};
    padding: 0.25rem 1rem;
  }
`;
const OrderTotal = styled.p``;
const OrderIcon = styled.div`
  fill: ${color.greyPale};
  align-self: center;
`;

const OrderHistoryItem = ({ order }) => {
  const { id, total } = order;

  return (
    <Link href={`/order/${id}`}>
      <ItemRowContainer>
        <OrderId>{id}</OrderId>
        <OrderDate>6/9/2021</OrderDate>
        <OrderStatus complete>
          <p>Complete</p>
        </OrderStatus>
        <OrderTotal>{formatMoney(total)}</OrderTotal>
        <OrderIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </OrderIcon>
      </ItemRowContainer>
    </Link>
  );
};

OrderHistoryItem.propTypes = {
  order: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

export default OrderHistoryItem;
