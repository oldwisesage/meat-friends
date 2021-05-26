import Link from "next/link";
import styles from "../styles/Nav.module.scss";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>meat friends</h1>
      </div>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/">
        <a>Shop</a>
      </Link>
      <Link href="/">
        <a>Philosophy</a>
      </Link>
      <Link href="/">
        <a>Contact</a>
      </Link>
      <div className="shopping-cart">logo</div>
    </nav>
  );
};

export default Nav;
