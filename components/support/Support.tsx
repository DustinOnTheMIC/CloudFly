import * as React from 'react';
import content from '../../share/Content';
import Image from 'next/image';

export interface SupportProps {
}

const Support = (props: SupportProps) => {

    const { support } = content.internal;

    return (
        <div className="col-12 block-centered text-align-center container pt-5">
            <h2 className="text-light col-12">
                <strong>{support.title}</strong>
            </h2>
            <div className="on-dark margin-bottom col-12 mt-3">
                {support.content}
            </div>
            <div className="container text-light justify-content-center pt-5 px-0 mx-0">
                {support.items.map((item, index) => 
                    <div 
                        className="col-md-4 col-12 row justify-content-center"
                        key={index}
                    >
                        <div className="col-6">
                            <Image src={item.img} alt="" width="400" height="400"/>
                        </div>
                        <div className="col-8">
                            <h4 className="text-light">{item.title}</h4>
                            {item.content}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Support;
