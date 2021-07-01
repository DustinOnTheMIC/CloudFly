import * as React from 'react';
import Image from "next/image";

export type CloudFeatureItemProps = {
    image: any,
    title: string,
    description: string
}

const CloudFeatureItem: React.FC<CloudFeatureItemProps> = ({ image, title, description }) => {
  return (
    <div className="col-md-6">
        <div className="feature-item">
            <div className="icon">
                <Image src={ image } alt="" />
            </div>
            <h4>{ title }</h4>
            <p>{ description }</p>
        </div>
    </div>
  );
};

export default CloudFeatureItem;
