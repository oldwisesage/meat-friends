import styled from 'styled-components';
import {
  boxShadow,
  borderRadius,
  fontWeight,
  color,
  fontSize,
} from '../../theme/Variables';

const PayMethodContainer = styled.div`
  margin-top: 1rem;
  border: 1px solid ${color.greyPale};
  padding: 1rem 2rem;
  border-radius: ${borderRadius.default};
  box-shadow: ${boxShadow.idle};
  &:hover {
    box-shadow: ${boxShadow.active};
  }
`;

const TopContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  & > * {
    font-size: ${fontSize.body};
    font-weight: ${fontWeight.light};
    color: ${color.greyDark};
  }
`;

const EditButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    font-weight: ${fontWeight.mid};
  }
  &:active {
    font-weight: ${fontWeight.book};
  }
`;

const LowerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const PayInfo = styled.div`
  margin-top: 1rem;
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.body};
  color: ${color.greyMid};
  text-align: Left;
  span {
    font-weight: ${fontWeight.bold};
  }
`;

const Address = styled.div`
  margin-top: 1rem;
  font-weight: ${fontWeight.light};
  font-size: ${fontSize.body};
  color: ${color.greyMid};
  text-align: right;
`;

const PayMethod = () => (
  <PayMethodContainer>
    <TopContainer>
      <h3>Payment method name</h3>
      <EditButton type="button">Edit</EditButton>
    </TopContainer>
    <LowerContainer>
      <PayInfo>
        <p>
          <span>Type: </span>VISA
        </p>
        <p>
          <span>Number: </span>
          **** **** **** 4242
        </p>
        <p>
          <span>Exp date: </span>04/24
        </p>
        <p>
          <span>CVC: </span>223
        </p>
      </PayInfo>
      <Address>
        <p>First Last</p>
        <p>000 New World Order Rd.</p>
        <p>New Meat City, ST 21703</p>
        <p>United States</p>
      </Address>
    </LowerContainer>
  </PayMethodContainer>
);
export default PayMethod;
