import * as React from "react";
import user from '../../assets/images/user.png';
import FeedBackItem, { OneFeedbackProps } from "./OneFeedback";
import useTranslate from '../../hooks/useTranslate';

const Testimonials: React.FC = () => {

  const t = useTranslate();
  const { testimonials } = t.internal;

  const feedback: OneFeedbackProps[] = [
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
      <div className="justify-content-center testimonial-item pt-5" data-aos="zoom-in-up">
        <div className="section-heading">
          <h2 className="text-center">{testimonials.title}</h2>
        </div>
      </div>
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
