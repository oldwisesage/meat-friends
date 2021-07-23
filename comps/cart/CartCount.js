import styled from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import useUser from '../user/User';

const Dot = styled.div`
  background: red;
  color: white;
  position: aboslute;
  top: -53px;
  left: 15px;
  border-radius: 50%;
  padding: 0.35rem;
  font-size: 1.5rem;
  font-weight: 700;
  width: 2.5rem;
  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;
const AnimationStyles = styled.span`
  position: relative;
  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }

  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }
  .count-enter-active {
    transform: rotateX(0);
  }
  .count-exit {
    top: -53px;
    left: 15px;
    position: absolute;
    transform: rotateX(0);
  }
  .counter-exit-active {
    transform: scale(4) rotateX(0.5turn);
  }
`;

const CartCount = ({ count }) => {
  const me = useUser();

  if (!me) return null;
  return (
    <AnimationStyles>
      <TransitionGroup>
        <CSSTransition
          unmountOnExit
          className="count"
          classNames="count"
          key={count}
          timeout={{ enter: 400, exit: 400 }}
        >
          <Dot>{count}</Dot>
        </CSSTransition>
      </TransitionGroup>
    </AnimationStyles>
  );
};
export default CartCount;
