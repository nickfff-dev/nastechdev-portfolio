import React, { Component } from 'react';
import yetu from "./hf3.svg"
import Devicons from './Devicons';
import { Container, Row, Col, Ratio} from 'react-bootstrap'

class Home extends Component {

  



    render() {
        return (
            <Container  >
                <Row>
                    <div className="d-flex align-items-center flex-wrap justify-content-between">
                           
                    <Col className="col-md-4">
						<h4> Hi,</h4>
						
                        <p>
                        I am a Full Stack Web Developer with  a passion for making
                            appealing user iterfaces and user experiences. I have a
                            background in Graphic Design and  a love for 
                            beautiful and intuitive user experiences. <br/>I have more than 5000 hours building, maintaining and deploying web applications. I can adapt onto any
                                    technology, I'm proficient with most tech stacks. Im a passionate, diligent dev who learns continuously.
                           
                        </p>
                        <div className="text-left">
                
                <Devicons />
                <hr/>
            </div>
                    </Col>
                        <Col>
                            <Ratio aspectRatio={"1x1"}>
		             <img src={yetu} alt="yetu" className="img-fluid" /></Ratio>
                     </Col>
					
                     </div>
                </Row>
               
                
                
                
                
            </Container>
        );
    }
}

export default Home;
