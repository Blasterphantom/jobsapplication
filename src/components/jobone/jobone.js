import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import Nvidia from './NvidiaPic.jpeg';
import GraphicsCard from './graphicsCard.jpeg';

export default function JobOneomponent() {

  // let startPage = document.getElementById("startPage")

  // startPage.className = "nvidiaPage";

  return (
    <Container className='jobOneContainer nvidiaPage'>
        <Row className='jobOneRowOne'>
          <h1 className='jobOneTitle'>Nvida</h1>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={Nvidia} className='nvidiaPicClass'/>
          </Col>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox'>
              <p className='nvidiaText'>Nvida is a company that focuses on game graphics and makes sure that every game you play runs as smoothly as possible with the best graphics. I would like to apply as a software engineer to help further their automation with scripts and collect more data that can be used to further improve the technology already implemented.</p>
            </div>
          </Col>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <div className='jobOneTextBox2'>
              <p className='nvidiaText'>I would like to work at Nvidia as a GPU Development Tools Engineer for the culture. Being a video game company, I would be with like-minded people, and being an in person job would make it a lot more fun. They also have health insurance with is all I need for benefits. <br/> The job asks for aptitude to work across the GPU, driver, and application stacks which I'm not too familiar with but willing to research, and c++, javascript, and java which means I woud need to read up on c++ and java. <br/> The goals I have in mind for this position would be to help make graphics card that continue to evolve the way we are able to play games. <br/> I currently do not have the skillset for the Job, but I hope to soon!</p>
            </div>
          </Col>
        </Row>

        <Row className='jobOneRowOne'>
          <Col className='jobOneColOne'>
            <img src={GraphicsCard} className='nvidiaPicClass'/>
          </Col>
        </Row>
    </Container>
  );
}