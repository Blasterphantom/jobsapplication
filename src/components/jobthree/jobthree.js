import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Tft from './twitch4.jpeg';
import Riot from './twitch3.jpeg';

export default function JobThreeComponent() {

  // let startPage = document.getElementById("startPage")

  // startPage.className = "twitchPage";

  return (
    <Container className='jobOneContainer twitchPage'>
        <Row className='jobOneRowOne'>
          <h1 className='jobOneTitle text-white'>Twitch</h1>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Riot} className='nvidiaPicClass'/>
          </Col>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox'>
              <p className='nvidiaText'>Twitch is a streaming company known for streaming gameplay. Many streamers become well known on the platform, and accumulate fans to watch. The platform itself always implements new changes, so that is why I want to work there!</p>
            </div>
          </Col>
        </Row>


        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox2'>
              <p className='nvidiaText'>I would like to work at Twicth as a Data Engineer for the culture. Being another video game-esque company, I would be with like-minded people, and being an in person job would make it a lot more fun since it is in San Francisco. They offer a 401k, health, and other forms of compensation that make it seem worth it. <br/> The job asks for expirience with database concepts and languages such as python, java, and scala with aws used. I would need to pick up python, aws, and SQL concepts.<br/> I currently do not have the skillset for the Job, but I hope to soon!</p>
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