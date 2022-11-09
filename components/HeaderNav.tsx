import Link from "next/link";
import React from "react";
import Image from "next/image";

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
            <Link href="/treatments"> Treatments </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default HeaderNav;
