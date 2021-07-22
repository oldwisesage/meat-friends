import { FormSection } from '../comps/container/Form';
import LoginForm from '../comps/forms/LoginForm';

export default function LoginPage() {
  LoginPage.layout = 'pic';
  return (
    <FormSection>
      <LoginForm />
    </FormSection>
  );
}
LoginPage.layout = 'pic';
