import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <div>
        <main>
          <div className="section section-header">
            <h1 className="header-title">Section 1 - Image</h1>
            <div className="header-image">
              <Image src="/placeholder.png" height={500} width={1200} />
              <h2>Some sort of slogan that is kind of cool</h2>
              <div className="btn"></div>
            </div>
          </div>
          <div className="section">
            <h1>Section 2 - Shop</h1>
          </div>
          <div className="section">
            <h1>Section 3 - Philosophy</h1>
          </div>
        </main>
      </div>
    </>
  );
}
