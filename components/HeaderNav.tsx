import Link from "next/link";
import React from "react";
import styles from "../styles/HeaderNav.module.css";

function HeaderNav() {
  return (
    <header>
      <h2>
        <Link href="/">Beauti</Link>
      </h2>
      <ul className={styles.links}>
        <li>
          <Link href="/treatments"> Treatments </Link>{" "}
        </li>
      </ul>
    </header>
  );
}

export default HeaderNav;
