import * as React from 'react';
import Image from "next/image";
import useTranslate from '../../hooks/useTranslate';

interface BenefitProps {
}

const Benefit: React.FC<BenefitProps> = (props) => {
    const translate: any = useTranslate();

    const { benefit } = translate.homePage;
    
    const sizeImg = '(max-width: 479px) 90vw, (max-width: 851px) 94vw, (max-width: 991px) 800px, 45vw';

  return (
    <section className="section has-bg-accent" >

        <div className="container flexh-align-center margin-bottom-double">

            <div className="col-lg-5 alignself-center md-12" data-aos="fade-right">

                <h2 className="margin-bottom-double" >
                    <strong>{benefit.block1.title}</strong>
                </h2>
                <ul className="c-checklist">

                    {benefit.block1.items.map((item: any, index: number) => 
                        <div key={index} >
                            <li className="c-checklist_item margin-bottom wrap-icon">
                                <i className="fa fa-check check-list" aria-hidden="true"></i>
                                <strong className="is-heading-color">{item.title}</strong><br/>
                                    {item.content}
                            </li>
                        </div>
                    )}

                </ul>
            </div>
            <div className="col-lg-1 no-margin-bottom"></div>
            
            <div className="justify-content-center container" >
                <div className="col-12 col-sm-9 col-lg-12 animate-scale">
                    <Image src={benefit.block1.img}  sizes={sizeImg} alt="" data-aos="fade-left"/>
                </div>
            </div>
            
        </div>

        <div className="container flexh-align-center">
            
            <div className="justify-content-center container">
                <div className="col-12 col-sm-9 col-lg-12 order-first animate-up-down" data-aos="fade-right" >
                    <Image src={benefit.block2.img} sizes={sizeImg} alt="" className="animate-scale"/>
                </div>
            </div>

            <div className="col-lg-5 alignself-center md-12" data-aos="fade-left">

                <h2>
                    <strong >{benefit.block2.title}</strong>
                </h2>
                <div className="margin-bottom-double">{benefit.block2.description}</div>

                <div className="container container-nested margin-bottom">
                    <ul className="c-checklist d-flex flex-wrap">

                        {benefit.block2.items.map((item: any, index: number) => 
                            <li className="c-checklist_item col-lg-6 wrap-icon" key={index}>
                                <i className="fa fa-check check-list"></i> 
                                {item}
                            </li>
                        )}

                    </ul>
                </div>
            </div>
        </div>

        <div className="container flexh-align-center margin-bottom-double">

            <div className="col-lg-5 alignself-center md-12" data-aos="fade-right" data-aos-delay="500">
                <h2 className="margin-bottom-double">
                    <strong>{benefit.block3.title}</strong>
                </h2>
                <ul className="c-checklist">

                    {benefit.block3.items.map((item: any, index: number) => 
                        <li className="c-checklist_item margin-bottom wrap-icon" key={index}>
                            <i className="fa fa-check check-list" aria-hidden="true"></i>
                            <strong className="is-heading-color">{item.title}</strong><br/>
                            {item.content}
                        </li>
                    )}
                    
                </ul>
            </div>
            <div className="col-lg-1 no-margin-bottom"></div>

            <div className="justify-content-center container">
                <div className="col-12 col-sm-9 col-lg-12 md-12 animate-diagonal">
                    <Image src={benefit.block3.img} sizes={sizeImg} alt="" data-aos="fade-left"/>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Benefit;
