import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import github from './github-mark.png';
import facebook from './facebook.png';
import indeed from './indeed.png';

function FooterFunction(){
    return(
        <Container className='footerContainer'>
            <Row className='footerRow'>
                <Col className='footerCol2'>
                    <Row className='footerRow2'>
                        <a className='footA' href='https://github.com/Blasterphantom' target='_blank'>
                            <img 
                            src={github}
                            className='githubPic'
                            />
                        </a>

                        <a className='footA' href='https://www.facebook.com/BlasterNeko/' target='_blank'>
                            <img 
                            src={facebook}
                            className='githubPic'
                            />
                        </a>

                        <a className='footA' href='https://www.linkedin.com/in/marcel-rodriguez-coding/' target='_blank'>
                        <img 
                        src={indeed}
                        className='githubPic'
                        />
                        </a>
                    </Row>

                    <Row className='footerRow2'>
                        <p className='textFoot'>Copyright for Marcel Rodriguez would go here</p>
                    </Row>

                </Col>
            </Row>
        </Container>
    );
}

export default FooterFunction;