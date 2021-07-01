import * as React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import publicCloud from "../../assets/media/public-cloud_7RpRHZ1.png";
import content from "../../share/Content";

export default function Header() {

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

  function handleExpandSubMenu() {
    const item = document.getElementById("wrapItems");
    const dropDown = document.getElementById("wrapDrop");
    const navbarDropdown = document.getElementById("navbarDropdown");

    dropDown?.classList.add("show");
    item?.classList.add("show");
    navbarDropdown?.setAttribute("aria-expanded", "true")
  }

  function handleCollapseSubMenu() {
    const item = document.getElementById("wrapItems");
    const dropDown = document.getElementById("wrapDrop");
    const navbarDropdown = document.getElementById("navbarDropdown");

    dropDown?.classList.remove("show");
    item?.classList.remove("show");
    navbarDropdown?.setAttribute("aria-expanded", "false")
  }

  const { ads, logo } = content.internal;

  return (

    <header className="section-header position-fixed">
      {/* top info */}
      <div className="container-fluid header-top hidden-xs header-top-text d-flex">

        {/* event */}
        <div id="event" className="col-12 col-md-12 col-lg-8 col-xl-8 align-items-center justify-content-center row mx-0 border border-top-0">
          <p className="marquee d-flex">
            <span>{ads}</span>
          </p>
        </div>
        {/* event */}

        {/* info */}
        <div id="info" className="no-margin-bottom flexh-justify-end no-padding-right hidden-xs test col-5">
          <ul className="nav-top float-right col-lg-9 col-xl-9 row d-flex">

            <li className="col-1">
              <Link href="https://www.facebook.com/cloudfly.vn">
                <a className="wrap-icon mx-1">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </Link>
            </li>

            <li className="col-1 wrap-icon mx-1">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              contact@cloudfly.vn
            </li>

            <li  className="col-9 wrap-icon">
              <i className="fa fa-phone-square mr-xl-3 mr-2" aria-hidden="true"></i>
              0904 558 448
            </li>
          </ul>
        </div>
        {/* info */}
      </div>
      {/* top info */}

      {/* navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex py-0" id="navbar">

        {/* logo */}
        <div className="wrap-logo no-margin-bottom order-first no-padding-left col-logo xs-12 md-grow p-2">
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

            <li className="nav-item dropdown" 
              id="wrapDrop" 
              onMouseEnter={handleExpandSubMenu} 
              onMouseLeave={handleCollapseSubMenu} 
            >
              <a 
                className="nav-link dropdown-toggle mx-auto px-auto" 
                id="navbarDropdown" 
                role="button" 
                data-toggle="dropdown" 
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sản Phẩm
              </a>
              
              <div
                id="wrapItems"
                className="dropdown-menu mt-0" 
                aria-labelledby="navbarDropdown"
              >
                <div id="split" className="bg-none p-xl-3 p-2 split"></div>

                <Link href="/cloud-server" passHref={true}>
                  <div className="one-item pointer p-3">
                    <a className="d-flex col-12 align-items-center mb-3 p-0">
                      <Image src={publicCloud} width={50} height={40} alt="" className=""/>
                      <p className="mb-0 ml-2 mt-2">Cloud Server</p>
                    </a>
                    <a >
                      Thanh toán theo giờ, tốc độ vượt trội và an toàn ổn định
                    </a>
                  </div>
                </Link>

                <div className="bg-none p-2 split"></div>

                <Link href="/cloud-server" passHref={true}>
                  <div className="one-item pointer p-3">
                    <a className="d-flex col-12 align-items-center mb-3 p-0">
                      <Image src={publicCloud} width={50} height={40} alt="" className=""/>
                      <p className="mb-0 ml-2 mt-2">Cloud Server</p>
                    </a>
                    <a>
                      Thanh toán theo giờ, tốc độ vượt trội và an toàn ổn định
                    </a>
                  </div>
                </Link>
                
                <div className="bg-none p-2"></div>

              </div>

            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link mb-0 mx-auto px-auto">Giải Pháp</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link mb-0 mx-auto px-auto">Khách Hàng</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link mb-0 mx-auto px-auto">TechBlog</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="#">
                <a className="nav-link mb-0 mx-auto px-auto">Hỗ Trợ</a>
              </Link>
            </li>
          </ul>

          <form className="form-inline my-2 my-lg-0 d-flex justify-content-end">
            <button className="btn btn-outline-primary my-2 mx-2 my-sm-0" type="submit">Đăng Nhập</button>
            <button className="btn btn-outline-info my-2 mx-2 my-sm-0" type="submit">Dùng Thử</button>
          </form>
        </div>

        {/* items */}

      </nav>
      {/* navbar */}

    </header>
  );
}
