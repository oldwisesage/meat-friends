// import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import useForm from '../lib/useForm';
import styles from './CreateCut.module.scss';
import DisplayError from './ErrorMessage';

const CREATE_CUT_MUTATION = gql`
  mutation CREATE_CUT_MUTATION(
    $name: String!
    $description: String!
    $price: Int!
    $image: Upload
  ) {
    createCut(
      data: {
        name: $name
        description: $description
        price: $price
        status: "available"
        photo: { create: { image: $image, latText: $name } }
      }
    ) {
      id
      price
      description
      name
    }
  }
`;

export default function CreateCut() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: '',
    price: '',
    description: '',
  });
  // LEARN under stand this a bit better
  const [createCut, { error, loading, data }] = useMutation(
    CREATE_CUT_MUTATION,
    {
      variables: inputs,
    }
  );
  return (
    <div className={styles.container}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(inputs);
          const res = await createCut();
          console.log(res);
        }}
      >
        <DisplayError error={error} />
        {/* TODO add aria-busy to fieldset after I understand more  */}
        <fieldset className={styles.form} disabled={loading}>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleChange}
            className={styles.form_input}
          />
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
            className={styles.form_input}
          />
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
            className={styles.form_input}
          />
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
            className={styles.form_textarea}
          />
          <button
            type="submit"
            onClick={handleChange}
            className={styles.form_btn}
          >
            Add product
          </button>
          <div className={styles.form_bottom}>
            <button
              type="button"
              onClick={clearForm}
              className={styles.form_bottom_btn}
            >
              Clear Form
            </button>
            <button
              type="button"
              onClick={resetForm}
              className={styles.form_bottom_btn}
            >
              Reset Form
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}
