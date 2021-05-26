// import Image from "next/image";
import Link from "next/link";

const Foot = () => {
  return (
    <footer>
      <div className="compliance">
        <Link href="/">
          <a>Word</a>
        </Link>
        <Link href="/">
          <a>Word</a>
        </Link>
        <Link href="/">
          <a>Word</a>
        </Link>
        <Link href="/">
          <a>Word</a>
        </Link>
      </div>
      <div className="logo">
        <h1>meat friends</h1>
      </div>
      <div className="bottom-nav">
        <nav>
          <Link href="/">
            <a>Word</a>
          </Link>
          <Link href="/">
            <a>Word</a>
          </Link>
          <Link href="/">
            <a>Word</a>
          </Link>
          <Link href="/">
            <a>Word</a>
          </Link>
          <Link href="/">
            <a>Word</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Foot;
