import { useRouter } from 'next/router';
import ForgotPassword from '../comps/forms/ForgotPassword';
import ResetPassword from '../comps/forms/ResetPassword';

const ResetPage = () => {
  const { query } = useRouter();

  if (!query?.token) {
    return <ForgotPassword />;
  }

  return <ResetPassword token={query.token} />;
};
export default ResetPage;
