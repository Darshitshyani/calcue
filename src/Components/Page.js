import React from "react";
import "./page.scss";
import C2 from "./images/devices.png";
import { box } from "./Help";
import { sec_box } from "./Help";
import { cloudBox } from "./Help";

import Frame from "./images/Frame.png";
import Frame1 from "./images/Frame-1.png";
import P1 from './images/P1.svg';
import P2 from './images/P2.svg';
import P3 from './images/P3.svg';
import P4 from './images/P4.svg';

const Page = () => {
 
  return (
    <>
      <div className="page-body">
        <div className="d-flex justify-content-between mt-3 flex-column flex-lg-row">
          <div className="w-100 flex-md-w-50 mt-4 d-flex flex-column gap-4">
            <h1 className="h_text">
              Digital Transformation Is not optional - so make it simple with{" "}
              <span className="bold_h1">Calcue Solutions</span>
            </h1>
            <p className="p_text">
              In the modern business climate, digital transformation is no
              longer optional. Businesses must be able to rapidly adapt and
              respond to changing market conditions in order to remain
              competitive. One of the best ways to achieve this is by leveraging
              cloud-based accounting software solutions like Calcue Solution.
            </p>
            <button className="Demo-btn">Request A Demo</button>
          </div>
          <div className="w-100 flex-md-w-50 ">
            <div className="img__div">
              <img src={Frame} className="frame-img" />
              <img src={C2} className="c2-img" />
              <img src={Frame1} className="frame-1-img" />
            </div>
          </div>
        </div>
        <div
          className="d-flex justify-content-center flex-column align-items-center hh-1"
          style={{ marginTop: "104px" }}
        >
          <h1 className="heading_text">
            Take your business to the next level with
          </h1>
          <h1
            className="heading_text"
            style={{ color: "rgba(13, 106, 160, 1)" }}
          >
            {" "}
            Cloud ERP
          </h1>
          <p className="mb-0 mt-3" style={{ fontSize: "18px" }}>
            Our cloud-based ERP solution is designed to provide businesses with
            the latest features
          </p>
          <p className="mb-0" style={{ fontSize: "18px" }}>
            and tools to help drive success and productivity
          </p>
        </div>
        <div className="box-model">
          <div className="d-flex flex-column">
            {box.slice(0, 2).map((val) => {
              return (
                <>
                  <div className="box">
                    <img src={val.img} />
                    <h3>{val.title}</h3>
                    <p>{val.graph}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex flex-column">
            {box.slice(2, 4).map((val) => {
              return (
                <>
                  <div className="box">
                    <img src={val.img} />
                    <h3>{val.title}</h3>
                    <p>{val.graph}</p>
                  </div>
                </>
              );
            })}
          </div>

          <div className="d-flex flex-column">
            {box.slice(4, 6).map((val) => {
              return (
                <>
                  <div className="box">
                    <img src={val.img} />
                    <h3>{val.title}</h3>
                    <p>{val.graph}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex flex-column">
            {box.slice(6, 8).map((val) => {
              return (
                <>
                  <div className="box">
                    <img src={val.img} />
                    <h3>{val.title}</h3>
                    <p>{val.graph}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center mt-3">
          <button className="see-btn">{"See more —>"}</button>
        </div>
        <div
          className="d-flex justify-content-center flex-column align-items-center hh-2"
          style={{ marginTop: "60px" }}
        >
          <h1>Key benefits of using <span style={{color:'rgba(13, 106, 160, 1)'}}>Cloud ERP</span> </h1>
          <p className="mb-0 mt-3" style={{ fontSize: "18px" }}>
            Our cloud-based ERP solution is designed to provide businesses with
            the latest features
          </p>
          <p className="mb-0" style={{ fontSize: "18px" }}>
            and tools to help drive success and productivity
          </p>
        </div>
        <div className="sec-box">
          {sec_box.map((val) => {
            return (
              <>
                <div className="in-box">
                  <div className="d-flex align-items-center">
                    <img src={val.img} /> <p className="ms-3">{val.title}</p>
                  </div>
                  <p className="mt-2">{val.graph}</p>
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="cloud-box">
          {/* <div className="d-flex justify-content-center align-items-center cd-1">
            <h1 style={{ color: "#0C6AA0" }}>Cloud</h1>
            <h1>Based </h1>
            <h1 style={{ color: "#0C6AA0" }}>ERP </h1>
            <h1>Solutions </h1>
          </div>
          <p className="mb-0 mt-3" style={{ fontSize: "18px" }}>
            Our cloud-based ERP solution is designed to provide businesses with
            the latest features
          </p>
          <p className="mb-0" style={{ fontSize: "18px" }}>
            and tools to help drive success and productivity
          </p>
          <div className="dash-box">
            {cloudBox.map((val) => {
              return (
                <>
                  <div className="dash-in-box">
                    <div>
                      <img src={val.img} />
                    </div>
                    <h5>{val.title}</h5>
                    <p>{val.graph}</p>
                    <h5>{val.arrow}</h5>
                  </div>
                </>
              );
            })}
          </div>
          <div className="abs-cloud"></div>
          <div className="service">
            <div className="p1">
              <h1>Let’s try our service now!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>Lorem Ipsum has.</p>
            </div>
            <div className="p2">
              <button>Get Started</button>
            </div>
          </div>
        </div>
           */}
        <div className="modules">
          <h1>Our <span style={{color:'rgba(13, 106, 160, 1)'}}>Modules</span></h1>
          <p>
            Our cloud-based ERP solution is designed to provide businesses with
            the latest features and tools to help drive success and productivity
          </p>
          <div className="module-box">
            <div className="d-flex module-boxes">
              <div className="d-flex flex-column">
                {cloudBox.slice(0, 2).map((val) => {
                  return (
                    <>
                      <div className="m-box">
                        <div className="d-flex align-items-center">
                          <img src={val.img} />{" "}
                          <h4 className="ms-3 mb-0">{val.title}</h4>
                        </div>
                        <p>{val.graph}</p>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="d-flex flex-column">
                {cloudBox.slice(2, 3).map((val) => {
                  return (
                    <>
                      <div className="m-box">
                        <div className="d-flex align-items-center">
                          <img src={val.img} />{" "}
                          <h4 className="ms-3 mb-0">{val.title}</h4>
                        </div>
                        <ul className="mt-3">
                          <li>
                            <p>{val.graph1}</p>
                          </li>
                          <li>
                            <p>{val.graph2}</p>
                          </li>
                        </ul>
                      </div>
                    </>
                  );
                })}
              </div>
              <div className="d-flex flex-column">
                {cloudBox.slice(3).map((val) => {
                  return (
                    <>
                      <div className="m-box">
                        <div className="d-flex align-items-center">
                          <img src={val.img} />{" "}
                          <h4 className="ms-3 mb-0">{val.title}</h4>
                        </div>
                        <p>{val.graph}</p>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="f3">
            <div className="d-flex align-items-start flex-column w-100">
              <h3 className="mb-3">Start work today</h3>
              <div className="d-flex w-100 mb-3 inpt-div">
                <input
                  type="text"
                  placeholder="Enter your email Address"
                  className="input-fild"
                />
                <button className="btn-start">Get Started</button>
              </div>
            </div>
            <h3>Quick Link</h3>
            <div>
              <p>Home</p>
              <p>Term of service</p>
            </div>
            <div>
              <p>Compliance</p>
              <p>Privacy Policy</p>
            </div>
            <div>
              <p>Security</p>
            </div>
          </div>
          <div className="f2">
            <h3>Contact Us</h3>
            <div className="d-flex mt-3">
              <p>1300 858 365</p>
            </div>
            <div className="d-flex mt-3">
              <p>info@gmail.com</p>
            </div>
            <div className="d-flex mt-3">
              <p>123, Downi Street NY, USA</p>
            </div>
            <h3 className="mt-3">Lets do it!</h3>
            <div className="social">
            <img src={P1}/>
            <img src={P2}/>
            <img src={P3}/>
            <img src={P4}/>

            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
