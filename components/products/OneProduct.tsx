import * as React from 'react';
import Image from 'next/image';
import useTranslate from '../../hooks/useTranslate';
import Link from 'next/link';

export type OneProductItemProps = {
    title: string
    img: any,
    content: string,
    delay: number,
    href: string
}

const OneProduct: React.FC<OneProductItemProps> = ({ title, img, content, delay, href }) => {

  const t = useTranslate();
  const { products } = t.homePage;

  return (
    <div className="col-md-4 col-sm-6 col-xs-10" data-aos="flip-up" data-aos-delay={`${delay}`}>
          <Link href={href}>
            <a>
              <div className="service-item shadow box-product">
                <Image src={ img } alt="" className="img-fluid" width={75} height={75}/>
                <h4><strong>{ title }</strong></h4>
                <p>{ content }</p>
                <button className="btn btn-outline-primary btn-rounded">{ products.button }</button>
              </div>
            </a>
          </Link>
    </div>
  )
};

export default OneProduct;
