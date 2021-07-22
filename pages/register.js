import { FormSection } from '../comps/container/Form';
import RegisterForm from '../comps/forms/RegisterForm';

export default function RegisterPage() {
  return (
    <FormSection>
      <RegisterForm />
    </FormSection>
  );
}

RegisterPage.layout = 'pic';
