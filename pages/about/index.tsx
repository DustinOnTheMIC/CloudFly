import * as React from "react";
import { useEffect } from "react";

//Image
import Image from "next/image";
import teamImage from "../../assets/images/our-team.jpg";

//component
import CarouselAbout from "../../components/carouselTestimonials/Testimonials";
import TeamIntroduce  from "../../components/teamIntroduce/TeamIntroDuce";

export default function About() {

  useEffect( () => {
    document.getElementById("navHistory")?.classList.add("text-active");
  });

  //add / remove active class
  const handleActive = (id: string) => {
    let idElement = ["navHistory", "navCloud", "navNetwork"];

    idElement.forEach( elementId => {
      document.getElementById(elementId)?.classList.remove("text-active");
    });

    document.getElementById(id)?.classList.add("text-active");
  }

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>About Us</h1>
              <p>
                <a href="index.html">Home</a> / <span>About Us</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="left-image">
                <Image src={teamImage} alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-content">
                <div className="section-heading">
                  <span>About Us</span>
                  <h2>Background of our company</h2>
                  <p>
                    Duis sit amet nibh non sapien tincidunt bibendum. Curabitur
                    rutrum justo id leo ornare, suscipit lobortis augue
                    volutpat. Sed ligula arcu, interdum eu magna eget, tristique
                    aliquet nibh.
                  </p>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 ">
                      <nav>
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                          <a className="mr-4 custom-text" onClick={() => handleActive("navHistory")} id="navHistory" data-toggle="tab" href="#nav-history" role="tab" aria-controls="nav-history" aria-selected="true">Our History</a>
                          <a className="mx-4 custom-text" onClick={() => handleActive("navCloud")} id="navCloud" data-toggle="tab" href="#nav-cloud" role="tab" aria-controls="nav-cloud" aria-selected="false">Our Cloud</a>
                          <a className="ml-4 custom-text" onClick={() => handleActive("navNetwork")} id="navNetwork" data-toggle="tab" href="#nav-network" role="tab" aria-controls="nav-network" aria-selected="false"> Our Network</a>
                        </div>
                      </nav>
                      <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-history" role="tabpanel" aria-labelledby="navHistory">
                          Ut elementum a elit sed tristique. Pellentesque sed semper erat. 
                          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                          Aenean quam erat, rutrum ut malesuada a, commodo vitae lectus. 
                          Integer volutpat sapien in arcu fringilla, ac eleifend est facilisis.
                          <br/><br/>
                          Phasellus finibus lacus eu scelerisque rutrum. Duis purus eros, blandit ultricies iaculis in, 
                          commodo quis lacus. Pellentesque interdum varius enim nec accumsan.
                        </div>
                        <div className="tab-pane fade" id="nav-cloud" role="tabpanel" aria-labelledby="navCloud">
                          Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet
                          maximus tortor nunc aliquet felis. Duis sit amet nibh non sapien tincidunt 
                          bibendum. Curabitur rutrum justo id leo ornare, suscipit lobortis augue volutpat. 
                          <br/><br/>
                          Sed ligula arcu, interdum eu magna eget, tristique aliquet nibh. Aenean sodales 
                          justo vitae ex pharetra, vitae tincidunt dolor condimentum. Cras vel mattis risus.
                        </div>
                        <div className="tab-pane fade" id="nav-network" role="tabpanel" aria-labelledby="navNetwork">
                          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. 
                          Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. 
                          Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non 
                          <br/><br/>
                          minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. 
                          Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.
                           Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TeamIntroduce />


      {/* carousel */}
      <CarouselAbout />
      {/* carousel */}    
    </>
  );
}
