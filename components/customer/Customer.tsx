import * as React from 'react';
import Image from 'next/image';

import useTranslate from '../../hooks/useTranslate';

//Image
import layer from '../../assets/images/layer-7.png';

const Customer: React.FunctionComponent = () => {

    const t = useTranslate();
    const { customer } = t.internal;

    return (
        <section className="trusted-section">
            <div className="row align-items-center justify-content-center">
                <div className="col-md-12">
                    <div className="trusted-section-heading">
                    <h4 className="blue">{customer.title}</h4>
                    </div>
                </div>
                <div className="d-flex justify-content-center col-12">

                    {customer.items.map( (item, index) =>
                        <div key={index} className="col-3 d-flex align-items-center justify-content-center">
                            <div className="col-2">
                                <Image src={item.img} alt="" />
                            </div>
                            <p className="col-4">{item.title}</p>
                        </div>
                    )}
                    
                </div>
            </div>
        </section>
    );
};

export default Customer;
