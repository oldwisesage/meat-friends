import styled from 'styled-components';
import Modal from '../comps/ui/Modal';
import Logout from '../comps/nav/Logout';
import useModal from '../lib/useModal';
import { Button } from '../comps/ui/Form';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
  fontWeight,
} from '../theme/Variables';

const PlaySection = styled.section`
  min-height: 50rem;
  display: grid;
  place-items: center center;
`;

const PlayButton = styled(Button)``;

const UserMenu = styled.nav`
  background-color: ${color.white};
  border-radius: ${borderRadius.default};
  border: ${border.thickest};
  box-shadow: ${boxShadow.idle};
  overflow: hidden;
  display: grid;
  position: absolute;
  top: 7rem;
  right: 32rem;
  opacity: 0;
  ${(props) =>
    props.active
      ? `opacity: 1; visibility: visible; transform: translateY(0);`
      : `transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;`}
`;

const Submenu = styled.div`
  border-top: ${border.thicker};
  margin: 0 0.5rem;
`;

const MenuItem = styled.div`
  display: grid;
  padding: 1rem 2.5rem;
  h3 {
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
  }
  &:hover {
    background-color: ${color.greyPale};
  }
`;
const PlayPage = () => {
  const { isShowing, toggle } = useModal();
  return (
    <PlaySection>
      <UserMenu>
        <MenuItem>
          <h3>Account</h3>
        </MenuItem>
        <MenuItem>
          <h3>Help</h3>
        </MenuItem>
        <MenuItem>
          <h3>Logout</h3>
        </MenuItem>
      </UserMenu>
      {/* <PlayButton onClick={toggle}>Open modal</PlayButton> */}
      {/* <Modal isShowing={isShowing} hide={toggle} /> */}
    </PlaySection>
  );
};
export default PlayPage;
