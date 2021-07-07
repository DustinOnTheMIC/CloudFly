import * as React from "react";
import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import useTranslate from "../../hooks/useTranslate";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions/lang.actions";

export default function Header() {
  const translate = useTranslate();
  const { header, email, phoneNumber } = translate.internal;
  const { ads, logo } = translate.internal;
  const dispatch = useDispatch();

  useEffect(() => {
    // Set navbar background when scroll
    window.onscroll = () => {
      const navbar = document.getElementById("navbar");
      const event = document.getElementById("event");

      if (window.scrollY > 100) {
        navbar?.classList.remove("bg-white");
        navbar?.classList.add("bg-light");
        event?.classList.add("border", "border-top-0");
      } else {
        navbar?.classList.add("bg-white");
        event?.classList.remove("border", "border-top-0");
      }
    };
  }, []);

  function handleExpandSubMenu(id: string) {
    const item = document.getElementById(id + 'Child');
    const dropDown = document.getElementById(id);

    dropDown?.classList.add("show");
    item?.classList.add("show");
  }

  function handleCollapseSubMenu(id: string) {
    const item = document.getElementById(id + 'Child');
    const dropDown = document.getElementById(id);

    dropDown?.classList.remove("show");
    item?.classList.remove("show");
  }

  function handleChangeLanguage(e: any) {
    
    //this will scroll document to the top
    // router.push(e.target.value);


    //this will not scroll the document to the top
    dispatch(changeLanguage());
  }

  return (

    <header className="section-header position-fixed">
      {/* top info */}
      <div className="container-fluid header-top hidden-xs header-top-text d-flex justify-content-end">

        {/* event */}
        <div id="event" className="align-items-center justify-content-center row mx-0 border border-top-0">
          <p className="marquee d-flex">
            <span>{ads}</span>
          </p>
        </div>
        {/* event */}

        {/* info */}
        <div id="info" className="no-margin-bottom flexh-justify-end no-padding-right hidden-xs col-5">
          <ul className="nav-top bg-white">

            <li className="">
              <Link href="https://www.facebook.com/cloudfly.vn">
                <a className=" mx-1">
                  TechBlog
                </a>
              </Link>
            </li>

            <li className="">
              <Link href="https://www.facebook.com/cloudfly.vn">
                  <a className=" mx-1">
                    Docs
                  </a>
              </Link>
            </li>

            <li  className="">
              <Link href="https://www.facebook.com/cloudfly.vn">
                  <a className=" mx-1">
                    Gửi Ticket
                  </a>
              </Link>
            </li>
          </ul>
        </div>
        {/* info */}
      </div>
      {/* top info */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex py-0" id="navbar">

        {/* logo */}
        <div className="wrap-logo no-margin-bottom order-first no-padding-left col-logo xs-12 md-grow p-2 mr-lg-3">
          <Link href="/" passHref={true}>
              <Image src={logo} alt="cloudfly.vn"className="brand on-dark w-nav-w--current pointer"/>
          </Link>
        </div>
        {/* logo */}

        {/* items */}
        <a
          className="navbar-toggler " 
          type="button" 
          data-toggle="collapse" 
          data-target="#subMenu"
          aria-controls="subMenu" 
          aria-label="Toggle navigation"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </a>

        <div className="collapse navbar-collapse" id="subMenu">
          <ul className="navbar-nav mr-auto">

            {header.menu.map( item => 
              item.items
              ? <li className="nav-item dropdown"
                  key={item.id}
                  id={item.id}
                  onMouseEnter={() => handleExpandSubMenu(item.id)} 
                  onMouseLeave={() => handleCollapseSubMenu(item.id)}>
                  <a 
                    className="nav-link dropdown-toggle mx-auto px-auto" 
                    role="button" 
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  >
                    {item.title}
                  </a>
                  
                  <div
                    id={item.id + "Child"}
                    className="dropdown-menu mt-0 wrap-items"
                  >
                    <div id="split" className="bg-none p-xl-3 p-2 split"></div>

                    {item.items.map((item, index) => 
                    
                      <div key={index}>
                        <Link href={item.href} passHref={true}>
                          <div className="one-item pointer p-3">
                            <a className="d-flex col-12 align-items-center mb-3 p-0">
                              <Image src={item.img} width={50} height={40} alt="" className=""/>
                              <p className="mb-0 ml-2 mt-2">{item.title}</p>
                            </a>
                            <a >
                              {item.content}
                            </a>
                          </div>
                        </Link>
                        <div className="bg-none p-2 split"></div>
                      </div>
                    )}
                  </div>
                </li>

              : <li className="nav-item" key={item.id} id={item.id}>
                  <Link href={item.href}>
                    <a className="nav-link mb-0 mx-auto px-auto">{item.title}</a>
                  </Link>
                </li>
            )}
          </ul>

          <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">

          

            <div className="wrap-icon contact-info text-right">
              <Link href={`tel:${phoneNumber}`}>
                <a className="wrap-icon">
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span className="d-none d-xl-inline">{phoneNumber}</span>
                </a>
              </Link>
            </div>

            {header.button.map( item => 
              <button 
                className={`btn ${item.id === 'signIn' ? 'btn-outline-primary' : 'btn-outline-info'} my-2 mx-2 my-sm-0 btn-rounded`}
                key={item.id}>
                  {item.title}
              </button>
            )}
            
            <div className="form-group mb-0">
              <select className="form-control btn-rounded" id="language" onChange={handleChangeLanguage}>
                <option value="vn">VN</option>
                <option value="en">EN</option>
              </select>
            </div>
          </form>
        </div>

        {/* items */}

      </nav>
      {/* navbar */}

    </header>
  );
}
