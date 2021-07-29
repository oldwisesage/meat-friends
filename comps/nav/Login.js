import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';
import {
  border,
  borderRadius,
  boxShadow,
  color,
  fontSize,
} from '../../theme/Variables';

const LoginButton = styled.button`
  border: ${border.fig};
  border-radius: ${borderRadius.default};
  background-color: ${color.white};
  text-decoration: none;
  padding: 0.4rem 2rem;
  max-height: 5rem;
  outline-offset: -2px;
  box-shadow: ${boxShadow.idle};
  font-size: ${fontSize.h4};
  &:hover {
    box-shadow: ${boxShadow.active};
  }
`;
const Login = () => {
  const router = useRouter();
  return (
    <LoginButton
      type="button"
      onClick={() => {
        router.push({ pathname: '/login' });
      }}
    >
      Login
    </LoginButton>
  );
};
export default Login;
