import * as React from 'react';
import { useEffect } from 'react';
import Image from 'next/image';

export type ProductItemProps = {
    title: string
    img: any,
    content: string
}

const ServiceItem: React.FC<ProductItemProps> = ({ title, img, content }) => {

  return (
    <div className="col-md-4 col-sm-6 col-xs-10">
          <a>
            <div className="service-item shadow box-product">
              <Image src={ img } alt="" className="img-fluid" width={75} height={75}/>
              <h4>{ title }</h4>
              <p>{ content }</p>
            </div>
          </a>
    </div>
  )
};

export default ServiceItem;
