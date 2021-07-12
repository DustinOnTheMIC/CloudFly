import * as React from 'react';
import useTranslate from '../../hooks/useTranslate';
import OneProduct from './OneProduct';

const Products: React.FunctionComponent = () => {

    const t = useTranslate();
    const { products } = t.homePage;

    return (
        <section className="services-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading" data-aos="fade-up">

                            <h2 className="text-center">{products.title}</h2>
                            <p className="text-center">{products.description}</p>
                        </div>
                    </div>

                        {
                            products.items.map( (item: any, index: number) => 
                                <OneProduct
                                    key={item.title}
                                    title={item.title}
                                    img={item.img}
                                    content={item.content}
                                    delay={index * 100}
                                    href={item.href}
                                />
                            )
                        }
                </div>
            </div>
        </section>
    );
};

export default Products;
