import * as React from "react";
import useTranslate from "../../hooks/useTranslate";

//Image
import Image from "next/image";
import trusted1  from "../../assets/images/trusted-01.png";

//Components / type
import Products from "../../components/products/Products";
import CarouselDefault from "../../components/carouselDefault/CarouselDefault";
import Benefit from "../../components/benefit/Benefit";
import Trial from "../../components/trial/Trial";

import Partner from "../../components/partner/Partner";
import Support from "../../components/support/Support";
import Feedback from "../../components/feedback/Feedback";

export default function Home() {
  
  const t:any = useTranslate();

  const { products } = t.homePage;
  const { testimonials } = t.internal;
  
  return (
    <div>
      <CarouselDefault/>

      <section className="trusted-section">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <div className="trusted-section-heading">
                <h4>TRUSTED BY 1,250+ HAPPY CUSTOMERS WORLDWIDE</h4>
              </div>
            </div>

            <div className="d-flex justify-content-center col-12">
              <div className="mr-auto">
                <Image src={ trusted1 } alt="trusted 1" />
              </div>
              <div className="mx-auto">
                <Image src={ trusted1 } alt="trusted 1" />
              </div>
              <div className="mx-auto">
                <Image src={ trusted1 } alt="trusted 1" />
              </div>
              <div className="ml-auto">
                <Image src={ trusted1 } alt="trusted 1" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading" data-aos="fade-up">

                <span>_____________</span>
                <h2>{products.title}</h2>
                <p>{products.description}</p>
              </div>
            </div>

            {
              products.items.map( (item: any, index: number) => 
                <Products
                  key={item.title}
                  title={item.title}
                  img={item.img}
                  content={item.content}
                  delay={index * 100}
                />
              )
            }

          </div>
        </div>
      </section>

      <Benefit/>
        
      <div className="justify-content-center testimonial-item pt-5" data-aos="zoom-in-up">
        <div className="section-heading">
          <span>_____________</span>
          <h2 className="text-center">{testimonials.title}</h2>
        </div>
      </div>

      <Feedback/>

    {/* partner */}
      <Partner/>
    {/* partner */}

    {/* trial */}
      <Trial/>
    {/* trial */}

      <Support/>

    </div>
  );
}
