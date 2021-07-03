import * as React from 'react';
import Image from 'next/image';
import useTranslate from '../../hooks/useTranslate';

export interface SupportProps {
}

const Support = (props: SupportProps) => {

    const translate = useTranslate();
    const { support } = translate.internal;

    return (
        <div className="bg-dark py-5">
            <div className="col-12 block-centered text-align-center container pt-5">
                <h2 className="col-12" data-aos="fade-down">
                    <strong>{support.title}</strong>
                </h2>
                <div className="margin-bottom col-12 mt-3" data-aos="fade-down">
                    {support.content}
                </div>
                <div className="container justify-content-center py-5 px-0 mx-0 ">
                    {support.items.map((item, index) => 
                        <div 
                            className="col-md-4 col-12 row justify-content-center"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}
                        >
                            <div className="col-6 animate-scale-hover">
                                <Image src={item.img} alt="" width="400" height="400"/>
                            </div>
                            <div className="col-8">
                                <h4>{item.title}</h4>
                                {item.content}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Support;
