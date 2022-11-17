import Link from "next/link";
import React from "react";
import Image from "next/image";
import BookButton from "../BookButton";

function HeaderNav() {
  return (
    <header>
      <h1>
        <span className="beauti-logo-heading">
          Beauti Skin Clinic London | Oval | Brixton Road | Beauty Skin Clinic
          London | Skin Treatment| Skin Clinic
        </span>
        <Link href="/">
          <a>
            <Image
              src="/images/Logo.png"
              alt="Beauti Skin Clinic Logo"
              width={300}
              height={100}
            />
          </a>
        </Link>
      </h1>
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
