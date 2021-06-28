import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import styles from './Cut.module.scss';

// TODO add propTypes

const Cut = ({ cut }) => (
  <Link href="/meats/cut">
    <div className={styles.container}>
      <div className={styles.img}>
        <img
          src={cut?.photo?.image?.publicUrlTransformed}
          alt={cut.name}
          className={styles.img_content}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.content_title}>{cut.name}</div>
        <div className={styles.content_bottom}>
          <p className={styles.content_price}>{formatMoney(cut.price)}</p>
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
        </div>
      </div>
    </div>
  </Link>
);

export default Cut;
