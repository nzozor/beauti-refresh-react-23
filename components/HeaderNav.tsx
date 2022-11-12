import Link from "next/link";
import React from "react";
import Image from "next/image";
import BookButton from "./BookButton";

function HeaderNav() {
  return (
    <header>
      <h2>
        <Link href="/">
          <a>
            <Image
              src="/images/Logo.png"
              alt="Beauti Logo"
              width={300}
              height={100}
            />
          </a>
        </Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link href="/"> Home </Link>{" "}
          </li>
          <li>
            <Link href="/about-us"> About us </Link>{" "}
          </li>
          <li>
            <Link href="/treatments"> Treatments </Link>{" "}
          </li>
          <li>
            <Link href="/contact"> Contact </Link>{" "}
          </li>
        </ul>
      </nav>
      <BookButton />
    </header>
  );
}

export default HeaderNav;
