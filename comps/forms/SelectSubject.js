import { useField } from 'formik';
import styled from 'styled-components';

const SelectSubjectStyles = styled.div`
  select {
    font-size: 1.563rem;
    font-weight: 200;
    background: #fff;
    color: #adadad;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    border: 0.5px solid #e0e0e0;
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
    width: 100%;
    border-radius: 5px;
    &:focus {
      outline: 0.5px solid #798465;
      box-shadow: 0px 4px 9px rgba(100, 68, 68, 0.1);
    }
    &:active {
      outline: 0.5px solid #587090;
      color: red;
    }
  }
  .error {
    color: #b06d71;
  }
`;

export const SelectSubject = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <SelectSubjectStyles>
      <label htmlFor={props.id || props.name} />
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </SelectSubjectStyles>
  );
};
