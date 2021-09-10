import { useField } from 'formik';
import styled from 'styled-components';
import { InputStyles } from './Input';
import {
  borderRadius,
  color,
  fontSize,
  fontWeight,
} from '../../theme/Variables';

const MessageInputStyles = styled(InputStyles)`
  textarea {
    font-size: ${fontSize.h4};
    font-weight: ${fontWeight.light};
    background: #fff;
    color: #000;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    border: 2px solid ${color.black};
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.04);
    width: 100%;
    border-radius: ${borderRadius.default};
    height: 10rem;
    resize: none;
    &:focus {
      outline: 0.5px solid #798465;
      box-shadow: 0px 4px 9px rgba(100, 68, 68, 0.1);
    }
    &:active {
      outline: 0.5px solid #587090;
    }
  }
  .error {
    color: #b06d71;
  }
`;

export const MessageInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <MessageInputStyles>
      <label htmlFor={props.id || props.name} />
      <textarea className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </MessageInputStyles>
  );
};
