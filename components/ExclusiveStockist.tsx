import React from "react";
import Image from "next/image";

const ExclusiveStockist: React.FC = () => {
  return (
    <section>
      <h3>Exclusive Stockist</h3>
      <h4>Medical grade skincare exclusively available at our clinic</h4>
      <div data-test-id="test-example">
        <div>
          <a
            href="https://www.alumiermd.co.uk/"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <Image
                className="js-lazy-image"
                src="/images/Stockist_Alumier.jpg"
                alt="Alumier | Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
                width={"100px"}
                height={"100px"}
              />
            </div>
          </a>
        </div>
        <div>
          <a href="https://hayoumethod.com/" target="_blank" rel="noreferrer">
            <div>
              <Image
                className="js-lazy-image"
                src="/images/beauti_hayo.jpg"
                alt="Hayou | Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
                width={"100px"}
                height={"100px"}
              />
            </div>
          </a>
        </div>
        <div>
          <a href="https://skinade.com/" target="_blank" rel="noreferrer">
            <div>
              <Image
                className="js-lazy-image"
                src="/images/Stockist_Skinade.jpg"
                alt="Skinade | Beauti Skin Clinic London | Oval | Brixton Road | Skin Treatment"
                width={"100px"}
                height={"100px"}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveStockist;
