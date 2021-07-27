import styled from 'styled-components';
import {
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const AddressContainer = styled.div`
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
    color: ${color.greyDark};
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
  }
`;
const Title = styled.h3``;
const EditButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    font-weight: ${fontWeight.mid};
  }
  &:active {
    font-weight: ${fontWeight.light};
  }
`;

const AddressBody = styled.div`
  margin-top: 1rem;
  p {
    font-weight: ${fontWeight.light};
    font-size: ${fontSize.body};
    color: ${color.greyMid};
  }
`;

// TODO add graphql query to retrieve data and display

const AddressButton = () => (
  <AddressContainer>
    <TopContainer>
      <Title>Address name</Title>
      <EditButton type="button">Edit</EditButton>
    </TopContainer>
    <AddressBody>
      <p>000 New World Order Rd.</p>
      <p>New Meat City, ST 21703</p>
      <p>United States</p>
    </AddressBody>
  </AddressContainer>
);
export default AddressButton;
