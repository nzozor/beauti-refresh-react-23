import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer>
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
      <div>
        <div>
          <a href="https://www.instagram.com/beautiskinclinic/">Insta logo</a>
        </div>
        <div>
          66A Brixton Road, London,
          <a
            href="https://g.page/beautiskinclinic?share"
            target="_blank"
            rel="noreferrer"
          >
            SW9 6BP
          </a>
          <br />
          Oval | Brixton <br />
          Telephone: <a href="tel:02078201177">020 7820 1177</a> <br />
          Email:
          <a href="mailto:info@beautiskinclinic.com">
            info@beautiskinclinic.com
          </a>
        </div>
        <div>
          OPENING TIMES <br />
          Mon-Fri 10am-8pm <br />
          Sat 9am-5pm
        </div>
      </div>
      <div>
        © 2021 BEAUTI. Website design by
        <a href="https://www.elsabenoldi.com/" rel="noreferrer" target="_blank">
          Elsa Benoldi
        </a>
        , website development by Zozor Consultancy.
      </div>
    </footer>
  );
}

export default Footer;
