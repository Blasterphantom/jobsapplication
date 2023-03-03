import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Riot from './disney1.jpeg';
import Tft from './winnie.jpg';

export default function JobFourComponent() {

  // let startPage = document.getElementById("startPage")

  // startPage.className = "disneyPage";

  return (
    <div>
    <Container className='jobOneContainer disneyPage'>
        <Row className='jobOneRowOne'>
          <h1 className='jobOneTitle2 text-white'>Disney</h1>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Riot} className='nvidiaPicClass'/>
          </Col>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox'>
              <p className='nvidiaText'>Disney is an entertainment company known for many classic characters and films. From Mickey Mouse to Winnie the Pooh, there are many loved characters that have become childhood favorites!</p>
            </div>
          </Col>
        </Row>


        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox2'>
              <p className='nvidiaText'>I would like to work at Disney Animation Studios as a Software Engineer for the culture. Being a Disney kid, I would be with like-minded people, and being an in person in Burbank would be intersting. They offer a 401k, health, and other forms of compensation that make it seem worth it. <br/> The job asks for expirience with c++, swift, and macOS knowledge, so I still need to learn about all of those for the job<br/> I currently do not have the skillset for the Job, but I hope to soon!</p>
            </div>
          </Col>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Tft} className='nvidiaPicClass'/>
          </Col>
        </Row>
    </Container>        
    </div>
  );
}