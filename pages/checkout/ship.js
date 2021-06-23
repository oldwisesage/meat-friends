import Link from "next/link";
import Image from "next/image";
import styles from "./ship.module.scss";

const Checkout = () => {
  return (
    <div className={styles.container}>
      {/* CHECKOUT */}
      <div className={styles.container_checkout}>
        <div className={styles.logo}>
          <h1 className={styles.logo_art}>meat friends</h1>
        </div>
        <div className={styles.checkout}>
          <div className={styles.heading}>
            <h1 className={styles.heading_title}>Checkout</h1>
            <h3 className={styles.heading_subtitle}>
              Please enter your shipping information
            </h3>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact_heading}>
              <h3 className={styles.contact_heading_title}>
                Contact information
              </h3>
              <p className={styles.contact_heading_already}>
                Already have an account?{" "}
                <span>
                  <Link href="/login">
                    <a className={styles.contact_heading_already_link}>
                      Log in
                    </a>
                  </Link>
                </span>
              </p>
            </div>
            <div className={styles.contact_form}>
              <div className={styles.contact_names}>
                <input
                  type="text"
                  className={styles.contact_input}
                  placeholder="First name"
                  id="first-name"
                  required
                />
                <input
                  type="text"
                  className={styles.contact_input}
                  placeholder="Last name"
                  id="last-name"
                  required
                />
              </div>
              <input
                type="email"
                className={styles.contact_input}
                placeholder="Email"
                id="email"
                required
              />
            </div>
          </div>
          <div className={styles.ship}>
            <div className={styles.ship_heading}>
              <h3 className={styles.ship_heading_title}>
                Shipping Information
              </h3>
            </div>
            <div className={styles.ship_form}>
              <div className={styles.ship_names}>
                <input
                  type="text"
                  className={styles.ship_input}
                  placeholder="First name"
                  id="first-name"
                  required
                />
                <input
                  type="text"
                  className={styles.ship_input}
                  placeholder="Last name"
                  id="last-name"
                  required
                />
              </div>
              <input
                type="text"
                className={styles.ship_input}
                placeholder="Address"
                id="address"
                required
              />
              <input
                type="text"
                className={styles.ship_input}
                placeholder="Apartment, suite, etc."
                id="address2"
                required
              />
              <div className={styles.ship_citystatezip}>
                <input
                  type="text"
                  className={styles.ship_input}
                  placeholder="City"
                  id="city"
                  required
                />
                <input
                  type="text"
                  className={styles.ship_input}
                  placeholder="State"
                  id="state"
                  required
                />
                <input
                  type="text"
                  className={styles.ship_input}
                  placeholder="Zip code"
                  id="zip"
                  required
                />
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.bottom_return}>
              <Link href="/">
                <a className={styles.bottom_return_link}> ◁ Return to cart</a>
              </Link>
            </div>
            <button className={styles.bottom_btn}>Continue to payment</button>
          </div>
        </div>
      </div>
      {/* CART DRAWER */}
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
          <div className={styles.cart_promo}>
            <input
              type="text"
              className={styles.cart_promo_input}
              placeholder="Enter promo code"
              id="promo"
            />
            <button className={styles.cart_promo_btn}>Apply</button>
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
};

export default Checkout;
