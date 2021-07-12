import * as React from "react";
import user from '../../assets/images/user.png';
import FeedBackItem, { FeedBackItemProps } from "./FeedbackItem";

const Testimonials: React.FC = () => {

  const feedback: FeedBackItemProps[] = [
    {
      img: user,
      user: {
        name: "name",
        gender: true,
        info: "nothing"
      },
      comment: `Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit. Amet ut 
        magni veritatis? Blanditiis, deserunt, 
        aliquam temporibus porro sed null`
    },
    {
      img: user,
      user: {
        name: "name",
        gender: false,
        info: "nothing"
      },
      comment: `Lorem ipsum, dolor sit amet 
        consectetur adipisicing elit. Amet ut 
        magni veritatis? Blanditiis, deserunt, 
        aliquam temporibus porro sed nulla voluptas 
        sit molestias accusantium, vero laboriosam`
    },
  ];

  return (
    <section className="pb-5 mb-5">
      <div className="carousel slide" data-ride="carousel" id="postsCarousel">
        <div className="container pt-0 mt-2">
          <div className="carousel-inner">

            <div className="carousel-item active">
              <div className="card-deck col-12">

                {feedback.map( (item, index) => 
                  <FeedBackItem 
                    key={index}
                    user={item.user}
                    img={item.img}
                    comment={item.comment}
                  />
                )}

              </div>
            </div>

            <div className="carousel-item">
              <div className="card-deck col-12">

                {feedback.map( (item, index) => 
                    <FeedBackItem 
                      key={index}
                      user={item.user}
                      img={item.img}
                      comment={item.comment}
                    />
                  )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
