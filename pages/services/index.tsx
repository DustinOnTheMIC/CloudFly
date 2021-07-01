import * as React from "react";

//component / type
import Products, { ProductItemProps } from "../../components/products/Products";
import CarouselAbout from "../../components/carouselTestimonials/Testimonials";
import content from "../../share/Content";
const Services: React.FC = () => {

  const { products } = content.homePage;

    return (
        <>
            <div className="page-heading header-text">
            <div className="container">
                <div className="row">
                <div className="col-md-12">
                    <h1>Our Services</h1>
                    <p>
                    <a href="index.html">Home</a> / <span>Our Services</span>
                    </p>
                </div>
                </div>
            </div>
            </div>

            <div className="services-section services-page">
                <div className="container">
                    <div className="row">
                        {products.items.map( (item, index) => 
                            <Products
                                key={ index }
                                title={ item.title }
                                img={ item.img }
                                content={ item.content }
                            />
                        )}
                    </div>
                </div>
            </div>
            
            <CarouselAbout/>

        </>
    );
};

export default Services;
