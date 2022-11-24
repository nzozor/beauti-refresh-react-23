import Link from "next/link";
import React from "react";
import Image from "next/image";
import BookButton from "../BookButton";

function HeaderNav() {
  return (
    <header>
      <div className="text-lg font-medium">
        Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment
      </div>
      <Link href="/">
        <a>
          <Image
            src="/images/Logo.png"
            alt="Beauti Skin Clinic Logo Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
            width={300}
            height={100}
          />
        </a>
      </Link>
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
