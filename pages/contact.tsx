import { GetStaticProps, NextPage } from "next";
import { AboutUsCopy } from "../types/AboutUsCopy";
import Image from "next/image";
import MapBox from "../components/MapBox";

const aboutUs: NextPage = () => {
  return (
    <section>
      <MapBox />
      <article className="contact-points">
        <div>
          <h2>Address</h2>
          <div className="address-section">
            66A Brixton Road <br />
            Oval | Brixton <br />
            London, &nbsp;
            <a
              href="https://g.page/beautiskinclinic?share"
              target="_blank"
              rel="noreferrer"
              className="address-google-map"
            >
              SW9 6BP
            </a>
          </div>
        </div>
        <div>
          <h1>Contact Details</h1>
          <div>
            020 7820 1177 <br />
            info@beautiskinclinic.com
          </div>
        </div>
        <div>
          <h2>Hours</h2>
          <div>
            Mon-Fri | 10am-8pm <br />
          </div>
          <div>
            Sat | 9am-5pm <br />
          </div>
        </div>
      </article>
      <article>
        <Image
          alt="Beauti Salon interior picture 1 | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-1.jpg"
        />
        <Image
          alt="Beauti Salon interior picture 2 | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-2.jpg"
        />
        <Image
          alt="Beauti Salon interior picture 3 | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-3.jpg"
        />
        <Image
          alt="Beauti Salon interior picture 4 | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-alumier.jpg"
        />
        <Image
          alt="Beauti Salon interior picture 5 | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-sothys.jpg"
        />
        <Image
          alt="Beauti Salon interior picture | Beauti Skin Clinic Oval"
          width="300px"
          height="300px"
          className="js-lazy-image"
          src="/images/beauti-skin-clinic-oval-waxed.jpg"
        />
      </article>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("http://cms.beautiskinclinic.com/about-us-page");
  // Parse the JSON
  const aboutUsCopy: AboutUsCopy = await response.json();
  console.log(aboutUsCopy);
  const copy = aboutUsCopy.Content;

  return {
    props: { copy },
  };
};
export default aboutUs;
