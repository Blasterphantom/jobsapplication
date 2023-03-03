import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Tft from './tft2.jpeg';
import Riot from './riotGames.jpeg';

export default function JobTwoComponent() {

  // let startPage = document.getElementById("startPage")

  // startPage.className = "riotPage";

  return (
    <Container className='jobOneContainer riotPage'>
        <Row className='jobOneRowOne'>
          <h1 className='jobOneTitle'>Riot</h1>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Riot} className='nvidiaPicClass'/>
          </Col>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox'>
              <p className='nvidiaText'>Riot is a video game company known for <em>League of Legends</em>. Inside that game, there is another game called <em>Teamfight Tactics</em>. I would love to work with the teamfight tactics team to create new sets each year and to add new mechanics to the game. It really is one of the best games I play in my freetime!</p>
            </div>
          </Col>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox2'>
              <p className='nvidiaText'>I would like to work at Riot as a Staff Software Engineer for the culture. Being another video game company, I would be with like-minded people, and being an in person job would make it a lot more fun although I wouldn't mind remote as well. They offer a 401k, health, and other forms of compensation that make it seem worth it. <br/> The job asks for expirience with multiple languages, cloud computing, and cloud infrastructure. Out of those, I need to learn AWS for the last two, and a few more languages to be proficient <br/> I currently do not have the skillset for the Job, but I hope to soon!</p>
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