// import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Router from 'next/router';
import useForm from '../../lib/useForm';
import { ALL_CUTS_QUERY } from '../shop/Cuts';
import styles from './CreateCut.module.scss';
import DisplayError from '../error/ErrorMessage';

// LEARN understand how mutations work much better
// DAVE have a conversation about how graphql mutations work  - and understand how this is not working

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
        photo: { create: { image: $image, altText: $name } }
      }
    ) {
      id
      name
      price
      description
    }
  }
`;

export default function CreateCut() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Cut name',
    price: 3241,
    description: 'What a picture',
    image: '',
  });
  // LEARN understand this a bit better
  const [createCut, { error, loading, data }] = useMutation(
    CREATE_CUT_MUTATION,
    { variables: inputs, refetchQueries: [{ query: ALL_CUTS_QUERY }] }
  );
  return (
    <div className={styles.container}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await createCut();
          clearForm();
          Router.push({
            pathname: `/meat/${res.data.createCut.id}`,
          });
        }}
      >
        <DisplayError error={error} />
        {/* TODO add aria-busy to fieldset after I understand more  */}
        <fieldset className={styles.form} disabled={loading}>
          <label htmlFor="image">
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className={styles.form_input}
            />
          </label>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              value={inputs.name}
              onChange={handleChange}
              className={styles.form_input}
            />
          </label>
          <label htmlFor="price">
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              value={inputs.price}
              onChange={handleChange}
              className={styles.form_input}
            />
          </label>
          <label htmlFor="description">
            <textarea
              id="description"
              name="description"
              placeholder="description"
              value={inputs.description}
              onChange={handleChange}
              className={styles.form_textarea}
            />
          </label>
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
