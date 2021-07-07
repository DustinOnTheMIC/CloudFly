import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import terms from "../../assets/images/terms.svg";
import btc from '../../assets/images/bct.png';
import useTranslate from "../../hooks/useTranslate";
import gdpr from '../../assets/images/gdpr.png';

export type FooterProps = {};

type itemOptions = {
  title: string,
  href: string,
  icon?: string
}

export default function Footer(props: FooterProps) {
  const translate = useTranslate();
  const { logo } = translate.internal;
  const { via, options, address, copyright, follow } = translate.internal.footer;

  return (
    <footer className="section padding-bottom-16 is-dark col-12">
      <div className="container flex-horizontal row">
        <div className="col-12 col-sm-8 col-md-6 col-lg-3 text-align-left mb-5">

            <Image src={logo} alt="" />
            <span>{via}</span>

          <div className="mt-md-3 ">
            <h3 className="text-light">{follow.title}</h3>
            <div>
              {follow.items.map((item, index) => 
                <Link
                  key={index} 
                  href={item.href}>
                  <a className="footer-nav-link on-dark w-inline-block">
                    <div className="col-12 wrap-icon wrap-icon px-0 mr-4">
                      <i className={item.icon + " mr-3"}></i> {item.title}
                    </div>
                  </a>
                </Link>
              )}
            </div>
          </div>
            
        </div>
        
        <div className="col-lg-1 no-margin-bottom"></div>

        <div className="col-lg-8 md-12">
          <div className="container container-nested is-wrapped col-12 d-flex">
            {options.map((option) => (
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-4 no-margin-bottom-lg text-sm-left text-center"
                key={option.title}
              >
                <div className="size-h4 margin-bottom on-dark font-weight-bold">
                  {option.title}
                </div>
                {option.items.map((item: itemOptions, index) =>
                  item.icon ? (
                    <Link
                      key={index} 
                      href={item.href}>
                      <a className="footer-nav-link on-dark w-inline-block ">
                        <div className="col-12 wrap-icon wrap-icon">
                          <i className={item.icon + " mr-3"}></i> {item.title}
                        </div>
                      </a>
                    </Link>
                  ) : (
                    <Link 
                      key={index}
                      href={item.href}>
                      <a className="footer-nav-link on-dark">{item.title}</a>
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="col-lg-12 margin-bottom">
            <div className="hr on-dark opacity"></div>
          </div>
        </div>

        <div className="container">
          {address.map((item) => (
            <div className="col-lg-4 no-margin-bottom md-12" key={ item.title }>
              <h4 className="title-brand-footer">{ item.title }</h4>
              <ul className="address-brand">
                {item.items.map( (item, index) => (
                  <li key={ index } className="wrap-icon">
                    <i className={ item.icon } aria-hidden="true"></i>
                    <span className="ml-2">{ item.title }</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="container">
          <div className="col-lg-12 margin-bottom">
            <div className="hr on-dark opacity"></div>
          </div>
        </div>
        <div className="container">
          <div className="col-lg-6 no-margin-bottom md-12 md-order-last">
            <div className="low-text-contrast text-small flexh-space-between md-flex-vertical">
              <div className="md-order-last">
                <p id="copyright">
                  {copyright.map((item, index) => (
                    <span key={index}>
                      {item} <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 no-margin-bottom md-12">
            <div className="w100 text-align-right footer-bottom md-text-align-left">
              <Link href="https://cloudfly.vn/quy-dinh-su-dung">
                <a className="m-2">
                  <Image src={terms} alt="" />
                </a>
              </Link>
              <Link href="http://online.gov.vn/Home/WebDetails/79418">
                <a className="m-2">
                  <Image src={btc} alt="" />
                </a>
              </Link>
              <Link href="https://gdpr.eu/">
                <a className="m-2">
                  <Image src={gdpr} alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
