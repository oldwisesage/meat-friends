import Image from 'next/image';
import Link from 'next/link';
import styles from './pay.module.scss';

const Pay = () => (
  <div className={styles.container}>
    <div className={styles.container_payment}>
      <div className={styles.logo}>
        <h1 className={styles.logo_text}>meat friends</h1>
      </div>
      {/* PAYMENT */}
      <div className={styles.payment}>
        <div className={styles.heading}>
          <h1 className={styles.heading_title}>Checkout</h1>
          <h3 className={styles.heading_subtitle}>
            Please enter your payment information
          </h3>
        </div>
        <div className={styles.card}>
          <input
            type="text"
            className={styles.card_input}
            placeholder="Name on card"
            id="card-name"
            required
          />
          <input
            type="text"
            className={styles.card_input}
            placeholder="Card number"
            id="card-num"
            required
          />
          <div className={styles.card_extra}>
            <input
              type="text"
              className={styles.card_input}
              placeholder="Exp date"
              id="exp-date"
              required
            />
            <input
              type="text"
              className={styles.card_input}
              placeholder="CVV"
              id="cvv"
              required
            />
            <input
              type="text"
              className={styles.card_input}
              placeholder="Zip code"
              id="zip"
              required
            />
          </div>
          <div className={styles.card_bottom}>
            <div className={styles.card_bottom_return}>
              <Link href="/checkout/ship">
                <a className={styles.card_bottom_return_link}>
                  ◁ Return to shipping
                </a>
              </Link>
            </div>
            <Link href="/">
              <button className={styles.card_bottom_btn}>Submit payment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* CART */}
    <div className={styles.container_cart}>
      <div className={styles.cart}>
        {/* ITEM */}
        <div className={styles.cart_item}>
          <Image
            src="/../public/placeholder.png"
            width="70"
            height="70"
            className={styles.cart_item_img}
          />
          <h4 className={styles.cart_item_name}>Cut name</h4>
          <h3 className={styles.cart_item_price}>$20.00</h3>
        </div>
        <div className={styles.cart_item}>
          <Image
            src="/../public/placeholder.png"
            width="70"
            height="70"
            className={styles.cart_item_img}
          />
          <h4 className={styles.cart_item_name}>Cut name</h4>
          <h3 className={styles.cart_item_price}>$20.00</h3>
        </div>
        <div className={styles.cart_item}>
          <Image
            src="/../public/placeholder.png"
            width="70"
            height="70"
            className={styles.cart_item_img}
          />
          <h4 className={styles.cart_item_name}>Cut name</h4>
          <h3 className={styles.cart_item_price}>$20.00</h3>
        </div>
        <div className={styles.cart_price}>
          <div className={styles.cart_shipping}>
            <h3 className={styles.cart_shipping_label}>Shipping</h3>
            <h3 className={styles.cart_shipping_cost}>$5.00</h3>
          </div>
          <div className={styles.cart_total}>
            <h3 className={styles.cart_total_label}>Total</h3>
            <h3 className={styles.cart_total_cost}>$334.00</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Pay.layout = 'checkout';

export default Pay;
