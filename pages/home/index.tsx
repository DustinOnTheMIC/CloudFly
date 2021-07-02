import * as React from "react";
import { useEffect } from 'react';

//Image
import Image from "next/image";
import  trusted1  from "../../assets/images/trusted-01.png";

//Components / type
import Products from "../../components/products/Products";
import CarouselAbout from '../../components/carouselTestimonials/Testimonials';
import CarouselDefault from "../../components/carouselDefault/CarouselDefault";
import Benefit from "../../components/benefit/Benefit";
import Trial from "../../components/trial/Trial";

import content from '../../share/Content';
import Partner from "../../components/partner/partner";
import Support from "../../components/support/Support";

export default function Home() {
  const { products } = content.homePage;
  return (
    <>
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
              <div className="section-heading"  data-aos="fade-up">

                <span>_____________</span>
                <h2>{products.title}</h2>
                <p>{products.description}</p>
              </div>
            </div>

            {
              products.items.map( (item, index) => 
                <Products
                  delay={index * 100}
                  key={item.title}
                  title={item.title}
                  img={item.img}
                  content={item.content}
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
          <h2 className="text-center">{content.internal.testimonials.title}</h2>
        </div>

      </div>
      
      {/* carousel */}
        <CarouselAbout />
      {/* carousel */}

            {/* partner */}
              <Partner/>
            {/* partner */}

      {/* trial */}
        <Trial/>
      {/* trial */}

      <Support/>

    </>
  );
}
