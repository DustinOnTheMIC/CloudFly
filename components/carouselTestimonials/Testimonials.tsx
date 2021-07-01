import * as React from "react";
import content from "../../share/Content";

const Testimonials: React.FC = () => {

  const { testimonials } = content.internal;

  return (
    <div className="testimonials-section row align-items-center justify-content-center mt-0 mx-0">

      <div className="col-8">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">

            {testimonials.items.map((item, index) => 
              <div 
                className={`carousel-item ${item.active ? 'active' : ''}`} 
                key={index}
              >
                <div className="testimonial-item">
                  <div className="wrap-icon icon-quote">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <p>{item.content}</p>
                  <h4>{item.from}</h4>
                  <span>{item.position}</span>
                </div>
              </div>
            )}

          </div>

          <ol className="carousel-indicators mt-5 relative">
            {testimonials.items.map((item, index) => 
              <li
                key={index}
                data-target="#carouselExampleIndicators"
                data-slide-to={`${item.slide}`}
                className={`custom-dots ${item.active ? 'active' : ''}`}
              ></li>
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
