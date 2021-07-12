import * as React from "react";
import useTranslate from "../../hooks/useTranslate";

//Components / type
import Products from "../../components/products/Products";
import CarouselDefault from "../../components/carouselDefault/CarouselDefault";
import Benefit from "../../components/benefit/Benefit";
import Trial from "../../components/trial/Trial";
import Customer from "../../components/customer/Customer";

import Partner from "../../components/partner/Partner";
import Support from "../../components/support/Support";
import Feedback from "../../components/feedback/Feedback";

export default function Home() {
  
  return (
    <>
      <CarouselDefault/>

      <Customer/>
      
      <Products/>

      <Benefit/>

      <Feedback/>

      <Partner/>

      <Trial/>

      <Support/>

    </>
  );
}
