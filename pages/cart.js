import Link from "next/link";
import Image from "next/image";
import styles from "./cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.heading_return}>
          <button className={styles.heading_return_btn}>
            ← Continue shopping
          </button>
        </p>
        <h1 className={styles.heading_title}>Shopping Cart</h1>
        {/* <h3 className={styles.heading_subtitle}>
          Hi User, if you are ready to checkout, follow the link below{" "}
        </h3> */}
      </div>
      <div className={styles.cart}>
        {/* <CartItem />*/}
        <div className={styles.cart_item}>
          <Image
            src="/../public/placeholder.png"
            height="100"
            width="100"
            className={styles.cart_item_thumb}
          />
          <div className={styles.cart_item_name}>
            <h3 className={styles.cart_item_name_main}>Cut name</h3>
            <p className={styles.cart_item_name_sub}>Something, that is</p>
          </div>
          <h4 className={styles.cart_item_price}>$28</h4>
          <div className={styles.cart_item_qty}>
            <svg
              width="10pt"
              height="10pt"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cart_item_qty_plus}
            >
              <path
                d="m50 0c5.8984 0 10.59 4.8242 10.59 10.59v28.82h28.82c5.7656 0 10.59 4.6914 10.59 10.59s-4.8242 10.59-10.59 10.59h-28.82v28.82c0 5.7656-4.6914 10.59-10.59 10.59s-10.59-4.8242-10.59-10.59v-28.82h-28.82c-5.7656 0-10.59-4.6914-10.59-10.59s4.8242-10.59 10.59-10.59h28.82v-28.82c0-5.7656 4.6914-10.59 10.59-10.59z"
                fill-rule="evenodd"
              />
            </svg>

            <button className={styles.cart_item_qty_btn}>2</button>
            <svg
              width="10pt"
              height="10pt"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cart_item_qty_minus}
            >
              <path
                d="m9.7852 40.145h80.289c5.4688 0 9.9297 4.4609 9.9297 9.7852 0 5.4688-4.4609 9.9297-9.9297 9.9297h-80.289c-5.3242 0-9.7852-4.4609-9.7852-9.9297 0-5.3242 4.4609-9.7852 9.7852-9.7852z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div className={styles.cart_item_total}>
            <h3 className={styles.cart_item_total_text}>Total</h3>
            <h4 className={styles.cart_item_total_cost}>$56</h4>
          </div>
          <div className={styles.cart_item_remove}>
            <svg
              width="15pt"
              height="15pt"
              version="1.1"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cart_item_remove_icon}
            >
              <path d="m50 43.57 24.059-24.059c1.7734-1.7734 4.6523-1.7734 6.4297 0 1.7734 1.7773 1.7734 4.6562 0 6.4297l-24.059 24.059 24.059 24.059c1.7734 1.7734 1.7734 4.6523 0 6.4297-1.7773 1.7734-4.6562 1.7734-6.4297 0l-24.059-24.059-24.059 24.059c-1.7734 1.7734-4.6523 1.7734-6.4297 0-1.7734-1.7773-1.7734-4.6562 0-6.4297l24.059-24.059-24.059-24.059c-1.7734-1.7734-1.7734-4.6523 0-6.4297 1.7773-1.7734 4.6562-1.7734 6.4297 0z" />
            </svg>
          </div>
        </div>
      </div>
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <div className={styles.checkout_payment}>
            <svg
              width="25pt"
              height="25pt"
              version="1.1"
              viewBox="0 0 100 100"
              fill="#e0e0e0"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.checkout_payment_card}
            >
              <path
                d="m6.0938 15.609h87.809c3.3516 0 6.0938 2.7422 6.0938 6.0938v56.594c0 3.3516-2.7422 6.0938-6.0938 6.0938h-87.809c-3.3516 0-6.0938-2.7422-6.0938-6.0938v-56.594c0-3.3516 2.7422-6.0938 6.0938-6.0938zm68.984 43.926c1.582 0 3.0547 0.47266 4.2852 1.2852 1.2305-0.8125 2.7031-1.2852 4.2852-1.2852 4.2969 0 7.7812 3.4844 7.7812 7.7812s-3.4844 7.7812-7.7812 7.7812c-1.582 0-3.0547-0.47266-4.2852-1.2852-1.2305 0.8125-2.6992 1.2852-4.2852 1.2852-4.2969 0-7.7812-3.4844-7.7812-7.7812s3.4844-7.7812 7.7812-7.7812zm-64.629-3.168h27.391v6.5898h-27.391zm0 12.066h42.461v6.5898h-42.461z"
                fill-rule="evenodd"
              />
            </svg>
            <div className={styles.checkout_payment_info}>
              <p className={styles.checkout_payment_info_title}>
                American Express
              </p>
              <p className={styles.checkout_payment_info_number}>****-09004</p>
            </div>
            <div className={styles.checkout_payment_go}>
              <svg
                width="15pt"
                height="15pt"
                version="1.1"
                fill="#e0e0e0"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m38 84c-1 0-2-0.39844-2.8008-1.1992-1.6016-1.6016-1.6016-4.1016 0-5.6992l27.102-27.102-27.102-27.199c-1.6016-1.6016-1.6016-4.1016 0-5.6992 1.6016-1.6016 4.1016-1.6016 5.6992 0l30 30c0.80078 0.80078 1.1992 1.8008 1.1992 2.8008 0 1.1016-0.39844 2.1016-1.1992 2.8008l-30 30c-0.89844 0.89844-1.8984 1.3008-2.8984 1.3008z" />
              </svg>
            </div>
          </div>
          <textarea
            className={styles.checkout_notes}
            placeholder="Special instructions or gift notes?"
          ></textarea>
        </div>
        <div className={styles.checkout_calc}>
          <div className={styles.checkout_calc_text}>
            <h3 className={styles.checkout_calc_text_subtotal}>Subtotal</h3>
            <h4 className={styles.checkout_calc_text_subtotalcost}>$56.00</h4>
            <h3 className={styles.checkout_calc_text_ship}>Shipping</h3>
            <h4 className={styles.checkout_calc_text_shipcost}>+ $10.00</h4>
            <h3 className={styles.checkout_calc_text_total}>Total</h3>
            <h4 className={styles.checkout_calc_text_cost}>$66.00</h4>
          </div>
          <div className={styles.checkout_btn}>
            <button className={styles.checkout_btn_click}>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
