import * as React from "react";
import Image from "next/image";
import content from "../../share/Content";
import useTranslate from '../../hooks/useTranslate';

interface PartnerProps {}

const Partner: React.FC<PartnerProps> = (props) => {
  const translate = useTranslate();
  const { partner } = translate.internal;

  return (
    <section className="bg-dark py-5">
      <div className="container py-5 my-0 d-flex flex-wrap justify-content-center">
        <div className="col-12 justify-content-center row">
          <h1
            className="text-center col-12 col-md-11"
            data-aos="zoom-in-up"
          >
            {partner.title}
          </h1>
          <p className="text-center col-12 col-md-11 mt-5">
            {partner.content}
          </p>
        </div>

        <div className="wrap-partner col-12">
          <div className=" partners d-flex">
            {partner.img.map((item, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 my-4 mx-0 justify-content-center d-flex partner"
              >
                <Image
                  src={item}
                  alt=""
                  data-aos="flip-left"
                  data-aos-delay={`${index * 100}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
