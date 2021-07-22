import { useRouter } from 'next/router';
import ForgotPassword from '../comps/forms/ForgotPassword';
import ResetPassword from '../comps/forms/ResetPassword';

export default function ResetPage() {
  const { query } = useRouter();
  console.log(query.token);

  if (!query?.token) {
    return <ForgotPassword />;
  }

  return <ResetPassword token={query.token} />;
}
