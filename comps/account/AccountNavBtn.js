import { useRouter } from 'next/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
`;

const InnerButton = styled.p`
  ${(props) =>
    props.active
      ? `padding: 0 1rem;
  border-radius: ${borderRadius.default};
  background: ${color.greyMid};`
      : null}
  &:hover {
    padding: 0 1rem;
    border-radius: ${borderRadius.default};
    background: ${color.greyPale};
  }
  &:active {
    padding: 0 1rem;
    border-radius: ${borderRadius.default};
    background: ${color.greyMid};
  }
`;
const AccountNavBtn = ({ comp, active }) => {
  const router = useRouter();

  function handleClick() {
    console.log(`⏳ Render a god damn component`);
    // router.push({ pathname: `/account/${link}` });
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

AccountNavBtn.propTypes = {
  comp: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export default AccountNavBtn;
