import React from "react";
import "./footer.css";
import { Row } from "react-bootstrap";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid text-center text-md-left outer-div-footer pt-3">
        <div className="row">
          <div className="col-lg-4 col-md-12 mt-md-0 mt-3 sltmobitel-div">
            <h5 className="text-uppercase">SLTMOBITEL</h5>
            {/* <p>Here you can use rows and columns to organize your footer content.</p> */}
            <Row className="p-2 ">
              Post Free Job Openings with SLTMobitel. Look for open positions at
              SLT Mobile in Sri Lanka and submit an online application.
              Applicants Employers will contact you when you submit your CV
            </Row>
            <Row className="pt-2">
              <h4>Join the conversation</h4>
            </Row>
            <div className="icon-row">
               
            <i className="icons fa-brands fa-facebook"></i>
            <i className="icons fa-brands fa-twitter"></i>
            <i className="icons fa-brands fa-instagram"></i>
            <i className="icons fa-brands fa-linkedin"></i>
            </div>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-lg-2  mb-md-0 mb-3 telephone-div ">
            <h5 className="text-uppercase  h5-topic0">TELEPHONE</h5>
            <ul className="list-unstyled  link-div">
              <li>
                <a href="#!">Fibre</a>
              </li>
              <li>
                <a href="#!">Megaline</a>
              </li>
              <li>
                <a href="https://www.mobitel.lk/4g-lte">4G/LTE</a>
              </li>
              <li>
                <a href="#!">Fibre</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-12 mb-md-0 mb-3 broadband-div" >
            <h5 className="text-uppercase h5-topic1">BROADBAND</h5>
            <ul className="list-unstyled link-div1">
              <li>
                <a href="https://mobitel.lk/broadband/new-connection">New Connection</a>
              </li>
              <li>
                <a href="#!">Packeages</a>
              </li>
              <li>
                <a href="#!">Wi-Fi</a>
              </li>
              <li>
                <a href="#!">Hosting Services</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-12 mb-md-0 mb-3 peotv-div">
            <h5 className="text-uppercase h5-topic2">PEO TV</h5>
            <ul className="list-unstyled link-div2">
              <li>
                <a href="#!">Packages</a>
              </li>
              <li>
                <a href="#!">Channels</a>
              </li>
              <li>
                <a href="#!">Video on Demand</a>
              </li>
            </ul>
          </div>
          <div className=" col-lg-2 col-md-6  mb-md-0 mb-3 contactus-div">
            <h5 className="text-uppercase h5-topic3">Contact US</h5>
            <div className=" link-div3">
              <p className="pt-2">
                Sri Lanka Telecom,
                <br /> PLCLotus Road,
                <br /> P.O.Box 503,
                <br />
                Colombo 01, Sri Lanka.
              </p>
              <p className="pt-0 mt-0">
                Call Us : <a href="#!">+94 112 021 000</a>
              </p>
              <p>
                Email : <a href="#!">pr@slt.lk</a>
              </p>
              {/* <p>(Monday to Friday - 9am to 5pm)</p> */}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3 lower-div">
        © 2020 Copyright:
        <a href="https:/www.mobitel.lk/?index=true bottom-word">SLTMobitel.lk</a>
      </div>
    </div>
  );
};

export default Footer;
