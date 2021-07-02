import * as React from "react";

import Image from "next/image";
import content from "../../share/Content";

export interface ICarouselDefaultProps {}

const CarouselDefault: React.FC = (props: ICarouselDefaultProps) => {

  const { carouselIntroduce } = content.internal;

  return (
    <div id="carouselDefault" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {carouselIntroduce.items.map((item, index) => 
          <li 
            key={index}
            data-target="#carouselDefault" 
            data-slide-to={`${item.slide}`} 
            className={`custom-dots ${item.active ? 'active' : ''}`}
          ></li>      
        )}
      </ol>
      <div className="carousel-inner">

        {carouselIntroduce.items.map((item, index) => 
          <div className={`carousel-item ${item.active ? 'active' : ''}`} key={index}>
            <div className="justify-content-center row">
                <Image className="d-block h-100" src={item.img} alt="First slide"/>
                <div className="carousel-caption d-none d-md-block text-light">
                  <i className="text-light">{item.description}</i>
                  <p className="text-light">{item.subLine}</p>
                </div>
            </div>
          </div>
        )}
        
      </div>
      <a className="carousel-control-prev" href="#carouselDefault" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselDefault" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default CarouselDefault;