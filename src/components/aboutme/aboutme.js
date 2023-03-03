import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col} from 'react-bootstrap';
import marcel from './marcel.jpg';
import codingCatTwo from './sanJoaquin.jpeg';

function AboutMeFunction(){
    return(
        <Container className='aboutMeContainer'>
            <Row className='aboutMeRow'>
                <Col className='aboutMePictureCol'>
                    <img className='imgMe' src={marcel} height="500" width="auto"/>
                </Col>
                <Col className='aboutMeTextCol'>
                    <div className='aboutMeTextBoxCol'>
                        <p className='aboutMeText'>Hello! My name is Marcel Rodriguez and I am looking to eventually apply and potentially get a position with one of the following 5 companies: Nvidia, Riot, Twitch, Disney, and Netflix.</p>
                    </div>
                </Col>
            </Row>

            <Row className='rowCat'>
                <Col>
                    <img src={codingCatTwo} className='codingCatPic'/>
                    <div className='eduPicText'>
                        <h2>Place of Study - <em>"CodeStack"</em> at San Joaquin County of Education</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMeFunction;