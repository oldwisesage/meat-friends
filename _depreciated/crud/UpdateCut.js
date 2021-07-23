import { useMutation, useQuery, gql } from '@apollo/client';
import DisplayError from '../error/ErrorMessage';
import styles from './UpdateCut.module.scss';
import useForm from '../../lib/useForm';

const SINGLE_CUT_QUERY = gql`
  query SINGLE_CUT_QUERY($id: ID!) {
    Cut(where: { id: $id }) {
      id
      name
      description
      price
    }
  }
`;

const UPDATE_CUT_MUTATION_QUERY = gql`
  mutation UPDATE_CUT_MUTATION_QUERY(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateCut(
      id: $id
      data: { name: $name, description: $description, price: $price }
    ) {
      id
      name
      description
      price
    }
  }
`;

export default function UpdateCut({ id }) {
  const { data, error, loading } = useQuery(SINGLE_CUT_QUERY, {
    variables: { id },
  });

  const [
    updateCut,
    { error: errorUpdate, loading: loadingUpdate, data: dataUpdate },
  ] = useMutation(UPDATE_CUT_MUTATION_QUERY, {
    variables: { id },
  });
  if (loading) return <p>loading..... </p>;
  const { inputs, handleChange, clearForm, resetForm } = useForm(data.Cut);
  return (
    <div className={styles.container}>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await updateCut({
            variables: {
              id,
              data: {
                name: inputs.name,
                description: inputs.description,
                price: inputs.price,
              },
            },
          }).catch(console.error);
          console.log(res);
          //   clearForm();
          //   Router.push({
          //     pathname: `/meats/${res.data.createCut.id}`,
          //   });
        }}
      >
        <DisplayError error={error || errorUpdate} />
        {/* TODO add aria-busy to fieldset after I understand more  */}
        <fieldset className={styles.form} disabled={loadingUpdate}>
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
            Update product
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
