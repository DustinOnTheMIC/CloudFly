import * as React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export type FeedBackItemProps = {
    img: any,
    user: {
        gender: boolean,
        name: string,
        info: string
    },
    comment: string,
}

const FeedBackItem: React.FC<FeedBackItemProps> = ({img, user, comment}) => {

  return (
    <div className="col-12 col-lg-5 mx-auto d-flex rounded border mt-5 py-3">
        <div className="col-6 row justify-content-center">
            <div className="img-user mt-2">
                <Image src={img} alt="" className="img-radius"/>
            </div>
            <div className="col-12">
                <i>{user.gender ? 'Male' : 'Female'}</i>
                <h5>{user.name}</h5>
                <p>{user.info}</p>
            </div>
        </div>
        <div className="col-7 mt-2 w-100">
            <p>{comment}</p>
            <div className="rating wrap-icon">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>
        </div>
    </div>
  );
};

export default FeedBackItem;
