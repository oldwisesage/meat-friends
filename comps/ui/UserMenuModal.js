import styled from 'styled-components';
import { border, borderRadius, boxShadow, color } from '../../theme/Variables';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const ModalContainer = styled.div`
  z-index: 100;
  position: relative;
  /* position: fixed; */
  top: 8rem;
  right: 31rem;
`;

const UserMenu = styled.div`
  background-color: ${color.white};
  border-radius: ${borderRadius.default};
  border: ${border.thickest};
  box-shadow: ${boxShadow.idle};
  overflow: hidden;
`;

// LEARN understand aria better
const UserMenuModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <ModalBackground aria-modal aria-hidden tabIndex={-1} role="dialog">
            <ModalContainer>
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
            </ModalContainer>
          </ModalBackground>
        </>
      )
    : null;
export default UserMenuModal;
