import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Riot from './netflix2.jpeg';
import Tft from './netflix3.jpeg';

export default function JobFiveComponent() {

  // let startPage = document.getElementById("startPage")

  // startPage.className = "netflixPage";

  return (
    <Container className='jobOneContainer netflixPage'>
        <Row className='jobOneRowOne'>
          <h1 className='jobOneTitle2 text-white'>Netflix</h1>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Riot} className='nvidiaPicClass'/>
          </Col>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox'>
              <p className='nvidiaText'>Netflix is a streaming company known for streaming films. From Stranger Things to Bojack Horseman, they have created many hit shows and provide classic movies as well!</p>
            </div>
          </Col>
        </Row>


        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox2'>
              <p className='nvidiaText'>I would like to work at Netflix as a Software Engineer for the culture. Being someone who binges shows, I would be with like-minded people, and being remote would be fine with me. They offer a 401k, health, and other forms of compensation that make it seem worth it. <br/> The job asks for expirience with java, c++, python, and cloud platforming, so I still need to learn about all of those for the job<br/> I currently do not have the skillset for the Job, but I hope to soon!</p>
            </div>
          </Col>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Tft} className='nvidiaPicClass'/>
          </Col>
        </Row>
    </Container> 
  );
}