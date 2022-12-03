import React from "react";
import image1 from "./portal-logo.gif";
import image2 from "./images/blah.png";
import image3 from "./images/logo.svg";
import image4 from "./logom.svg"
import { Container,Col,Row } from "react-bootstrap";

class About extends React.Component {
  render() {
    return (
      <Container className="mb-4" id="portfolio">
        <h1 className="text-center mb-5">Scope of work</h1>

        <div className="container mb-5">
          <div className="row align-middle">
            <div className="col-md-6 col-lg-4 column">
              <div className="card gr-1">
                <div className="txt">
                  <h1>
                    SCRIPTING AND <br />
                    AUTOMATION
                  </h1>
                  <p>Python node for scripts and automation</p>
                </div>
                <a className="text-bold text-white" href="https://github.com/nickfff-dev/download-tiktok-hashtag-video"
                  target="_blank" rel="noopener noreferrer">
                
                  more
                </a>
                <div className="ico-card">
                  <i className="fab fa-python"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 column">
              <div className="card gr-2">
                <div className="txt">
                  <h1>
                    Web Front-End <br />
                    MAINTENANCE
                  </h1>
                  <p>Maintenance of already runnning websites</p>
                </div>
                <a className="text-bold text-white" href="https://portaldefi.com/" target="_blank" rel="noopener noreferrer">more</a>
                <div className="ico-card">
                  <i className="fab fa-node-js"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 column">
              <div className="card gr-3">
                <div className="txt">
                  <h1>
                    UX/UI WEBsite <br />
                    AND WEB app
                  </h1>
                  <p>User Interface and User Experience Development.</p>
                </div>
                <a className="text-bold text-white " href="https://altcheck.io/"  target="_blank" rel="noopener noreferrer">more</a>
                <div className="ico-card">
                  <i className="fas fa-file-code"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Container>
         
          <div className="card__container flex-wrap">
            <div className="col-md-12 col-lg-3 p-2 column">
              
     
           <div className="cardano">
           <a href="https://d3-js-html-barchart.vercel.app/"  className=" text-decoration-none text-bold" target="_blank" rel="noopener noreferrer"><div className="card__content">
               <h3 className="card__header text-bold">Data View</h3>
                 <p className="card__info">D3.js is javascript for rendering data</p>
             
             </div></a>
              </div>
            </div>
            <div className="col-md-12 col-lg-3 p-2 column">
           <div className="cardano">
           <a href="https://models-portfolio-jquery-bootstrap.vercel.app/"  className=" text-decoration-none text-bold" target="_blank" rel="noopener noreferrer"> <div className="card__content">
               <h3 className="card__header text-bold">Portfolios</h3>
               <p className="card__info">Make your own unique portfolio website. </p>
              
             </div></a>
              </div>
              </div>
              <div className="col-md-12 col-lg-3 p-2 column">
           <div className="cardano">
           <a href="https://bands-in-town-api-eventsembed.vercel.app/"  className=" text-decoration-none text-bold " target="_blank" rel="noopener noreferrer"><div className="card__content">
               <h3 className="card__header text-bold">Api</h3>
                       <p className="card__info">connect api to website</p>
                       
               
             </div></a>
              </div>
              </div>
              <div className=" col-md-12 col-lg-3 p-2 column">
                   <div className="cardano">
           <a href="https://agile-basin-57028.herokuapp.com/graphql?query=%7Bposts%7Bid%20title%20published%7D%7D"  className=" text-decoration-none text-bold " target="_blank" rel="noopener noreferrer"><div className="card__content">
               <h3 className="card__header text-bold">Graphlql</h3>
                       <p className="card__info">Data queries from db</p>
                       
               
             </div></a>
              </div>
              
          </div>
          </div>
       </Container>
        <Container className="py-5 text-center">
          <h1 className="text-center mb-5">Our Clients</h1>
          <div className="photos d-flex align-items-center justify-content-around">
            <Col>
              <a href="https://portaldefi.com/"  className="" target="_blank" rel="noopener noreferrer">
            <img
              
              src={image1}
              width="300px"
              height="auto"
              alt="portal logo"
              className="img-fluid"
             
              /></a></Col>
            <Col>
              <a href="https://btherapy.vercel.app/"  className="" target="_blank" rel="noopener noreferrer">
            <img
              
              src={image2}
              width="300px"
              height="auto"
              alt="waltcheck"
              className="  img-fluid"
             
                />
                </a>
            </Col>
            <Col>
              <a href="https://cyberrunners.vercel.app"  className="" target="_blank" rel="noopener noreferrer">
            <img
              
              src={image3}
              width="300px"
              height="auto"
              alt="portal logo"
              className=" img-fluid"
             
                />
              </a></Col>
              <Col>
              <a href="https://medicalcentric.net"  className="" target="_blank" rel="noopener noreferrer">
            <img
              
              src={image4}
              width="300px"
              height="auto"
              alt="portal logo"
              className=" img-fluid"
             
                />
            </a></Col>
          </div>
        </Container>

      </Container>
    );
  }
}

export default About;
