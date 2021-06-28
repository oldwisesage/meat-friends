import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import styles from './Cut.module.scss';
import DeleteCut from './DeleteCut';

// TODO add propTypes

const Cut = ({ cut }) => (
  <div className={styles.container}>
    <Link href="/meats">
      <div className={styles.img}>
        <img
          src={cut?.photo?.image?.publicUrlTransformed}
          alt={cut.name}
          className={styles.img_content}
        />
      </div>
    </Link>
    <div className={styles.content}>
      <div className={styles.content_title}>{cut.name}</div>
      <p className={styles.content_price}>{formatMoney(cut.price)}</p>
      <div className={styles.content_bottom}>
        <Link
          href={{
            pathname: 'update',
            query: {
              id: cut.id,
            },
          }}
        >
          <a className={styles.content_edit}>✎ Edit cut</a>
        </Link>
        <DeleteCut id={cut.id}>Delete</DeleteCut>
      </div>
    </div>
  </div>
);

export default Cut;
