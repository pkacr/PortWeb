import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon from '../assets/img/github.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://github.com/pkacr/" target="_blank"><img src={navIcon} alt="" /></a>
                <a href="https://www.linkedin.com/in/atchara-pathon-047888329/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://www.facebook.com/austchara.pathon.3/" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/pkacr/profilecard/?igsh=eHlrc2NyeXN0Mnow" target="_blank"><img src={navIcon3} alt="" /></a>
              
            </div>
            <p>©2024 Atchara Pathon</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
