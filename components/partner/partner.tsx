import * as React from 'react';
import Image from 'next/image';
import content from '../../share/Content';

interface PartnerProps {
}

const Partner: React.FC<PartnerProps> = (props) => {

  const { partner } = content.internal;

  return (
      <section className="container p-5 my-5 d-flex flex-wrap justify-content-center">
        <div className="col-12 col-lg-6 justify-content-end row">
          <h1 
            className="text-center text-lg-right col-12 col-md-11" 
            data-aos="zoom-in-up">
            {partner.title}
          </h1>
          <p className="text-center text-lg-right col-12 col-md-11 mt-5">{partner.content}</p>
        </div>

        <div className="col-12 col-lg-6 row">
          
          {partner.img.map((item, index) =>
            <div key={index} className="col-12 col-sm-6 my-4 mx-0 justify-content-center d-flex flex-wrap">
              <Image src={item} alt="" data-aos="flip-left" data-aos-delay={`${index * 100}`}/>
            </div>
          )}
          
        </div>
      </section>
  );
};

export default Partner;
