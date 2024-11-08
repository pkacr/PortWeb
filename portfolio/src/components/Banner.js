import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import k from "../assets/img/kmutnb.png";
import r from "../assets/img/rt.png";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "EnET-C Student", "KMUTNB Student", "Web Developer" ];
  const toRotate1 = [ "RT School","KMUTNB"];
  const [text1, setText1] = useState('');
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  useEffect(() => {
    let ticker1 = setInterval(() => {
      tick1();
    }, delta);

    return () => { clearInterval(ticker1) };
  }, [text1])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const tick1 = () => {
    let i = loopNum % toRotate1.length;
    let fullText = toRotate1[i];
    let updatedText = isDeleting ? fullText.substring(0, text1.length - 1) : fullText.substring(0, text1.length + 1);

    setText1(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Atchara`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "EnET-C Student", "KMUTNB Student","Web Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Hello, my name is Atchara Pathon.but you can call me Pakim.  I am currently a student at King Mongkut's University of Technology North Bangkok, studying Electronic Engineering Technology with a focus on Computer Systems. I am passionate about Front-End Development, Mobile App Development with Flutter, and UX/UI Design. I am eager to learn and gain hands-on experience, and I am committed to working diligently to improve my skills.</p>
                  <section className="ed" id="ed">
                  <h1>{`My Education : `}<span className="txt-rotate1" dataPeriod="1000" data-rotate1 ='[ "RT School","KMUTNB"]'><span className="wrap">{text1}</span></span></h1>
                  
                  <div className="container">
                    <div className="row1">
                      <div className="itemm">
                        <img src={k} alt="Image" />
                      </div>
                      <div className="itemm">
                        <img src={r} alt="Image" />
                      </div>
                      
                    </div>
                  </div>

                  </section>
                    <div>
                      <p>King Mongkut's University of Technology North Bangkok GPA : 3.07 
                        <br/>Expected Graduation : 2025
                      </p>
                      <p>Rattanathibate School
                        GPA : 3.74 Graduation : 2020
                      </p>
                     </div>

                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
