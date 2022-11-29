import Link from "next/link";
import React from "react";
import Image from "next/image";
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <footer className="relative flex flex-col lg:flex-row h-[400px] text-center place-items-center md:place-items-start">
      <Link href="/">
        <div className="md:absolute w-[180px] pt-[2rem] md:pl-[5rem] cursor-pointer">
          <img
            src="/images/Logo.png"
            alt="Beauti Logo"
            width={500}
            height={500}
            className=""
          />
        </div>
      </Link>
      <div className="mx-auto text-[14px] text-[#3e3d3c] mt-[2rem]">
        <div className="w-full">
          <div className="w-full flex justify-center place-items-center">
            <div className="w-[fit-content] opacity-100 p-1 mb-[2rem] text-center border-2 border-[#252525] rounded-full flex justify-center place-content-center">
              <a href="https://www.instagram.com/beautiskinclinic/" className="flex justify-center place-items-center">
                <InstagramIcon className="text-[1.5rem] text-[#252525]" />
              </a>
            </div>
          </div>
          <div className="mb-[1rem]">
            66A Brixton Road, London,
            <a
              href="https://g.page/beautiskinclinic?share"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              SW9 6BP
            </a>
            <br />
            Oval | Brixton <br />
            Telephone: <a href="tel:02078201177" className="hover:underline">020 7820 1177</a> <br />
            Email:
            <a href="mailto:info@beautiskinclinic.com" className="hover:underline">
              info@beautiskinclinic.com
            </a>
          </div>
          <div className="mb-[2rem]">
            OPENING TIMES <br />
            Mon-Fri 10am-8pm <br />
            Sat 9am-5pm
          </div>
        </div>
        <div className="text-[12px]">
          © 2021 BEAUTI. Website design by
          {" "}
          <a href="https://www.elsabenoldi.com/" rel="noreferrer" target="_blank">
            Elsa Benoldi
          </a>
          , website development by Zozor Consultancy.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
