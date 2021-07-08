import Link from 'next/link';
import formatMoney from '../../lib/formatMoney';
import AddToCart from './AddToCart';
import styles from './Cut.module.scss';

// TODO add propTypes

const Cut = ({ cut }) => (
  <div className={styles.container}>
    <Link href={`/meat/${cut.id}`}>
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
        <AddToCart id={cut.id} />
      </div>
    </div>
  </div>
);

export default Cut;
