import * as React from 'react';

//component
import CarouselAbout from '../../components/carouselTestimonials/Testimonials';

interface ContactProps {
}

const Contact: React.FC<ContactProps> = (props) => {
  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Contact Us</h1>
              <p><a href="index.html">Home</a> / <span>Contact Us</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-form">
                <form id="contact" action="" method="post">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input name="name" type="text" id="name" placeholder="Your name" required/>
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input name="email" type="text" id="email" placeholder="Your email" required/>
                      </fieldset>
                    </div>
                    <div className="col-md-12 col-sm-12">
                      <fieldset>
                        <input name="subject" type="text" id="subject" placeholder="Subject"/>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <textarea name="message" rows={6} id="message" placeholder="Your message" required></textarea>
                      </fieldset>
                    </div>
                    <div className="col-lg-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="main-button">Send Message</button>
                      </fieldset>
                    </div>
                  </div>
                </form>
            </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="section-heading">
                  <span>Contact Us</span>
                  <h2>{"Let's keep in touch"}</h2>
                  <p>Quisque sagittis blandit sapien et elementum. Fusce pretium viverra consequat. 
                    Aliquam at feugiat mi. Pellentesque hendrerit, felis ac sodales commodo.</p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-phone"></i>
                        010-020-0560
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-support"></i> 
                        support@company.com
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-envelope"></i> 
                        contact@company.com
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-globe"></i> 
                        www.company.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="map" className="">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1917.0224033902737!2d108.2028142241444!3d16.063164499249616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219b28c737629%3A0x645e54ccf05a2b75!2zNTYgTmd1eeG7hW4gVHJpIFBoxrDGoW5nLCBDaMOtbmggR2nDoW4sIFRoYW5oIEtow6osIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1624612581266!5m2!1svi!2s" 
          width="100%" 
          height="520px" 
          frameBorder="0" 
          style={{border:"0"}}
          allowFullScreen>
        </iframe>
      </div>

      <CarouselAbout/>
    </>
  )
};

export default Contact;
