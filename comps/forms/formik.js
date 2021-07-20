import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './formik.module.scss';

export default function Form34() {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or more')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or more')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {(formik) => (
          <Form className={styles.form}>
            <Field name="firstName" type="text" placeholder="First name" />
            <ErrorMessage name="firstName" />
            <Field name="lastName" type="text" placeholder="Last name" />
            <ErrorMessage name="lastName" />
            <Field name="email" type="text" placeholder="Email addresss" />
            <ErrorMessage name="email" />
            <Field
              name="message"
              as="textarea"
              className="form-textarea"
              placeholder="message"
            />
            <Field name="select" as="select" className="my-select">
              <option value="pork">Pork</option>
              <option value="beef">Beef</option>
              <option value="chix">Chicken</option>
            </Field>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
