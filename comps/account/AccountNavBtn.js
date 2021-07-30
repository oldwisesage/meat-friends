import { useRouter } from 'next/router';
import styled from 'styled-components';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const NavButton = styled.button`
  font-size: ${fontSize.h4};
  font-weight: ${fontWeight.book};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: flex-start;
  border: none;
  background-color: white;
  &:hover {
    padding: 0 0.5rem;
    border-radius: ${borderRadius.default};
    background: ${color.greyPale};
  }
  &:active {
    background: ${color.greyMid};
  }
`;

const InnerButton = styled.p`
  ${(props) =>
    props.active
      ? `padding: 0 1rem;
  border-radius: ${borderRadius.default};
  background: ${color.greyMid};`
      : null}
`;
const AccountNavBtn = ({ comp, active, link }) => {
  const router = useRouter();

  function handleClick() {
    router.push({ pathname: `/account/${link}` });
  }

  return (
    <NavButton type="button" onClick={handleClick}>
      {active === true ? (
        <InnerButton active>{comp}</InnerButton>
      ) : (
        <InnerButton>{comp}</InnerButton>
      )}
    </NavButton>
  );
};
export default AccountNavBtn;
