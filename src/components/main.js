import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavbarBrand,
  Container,
  Image,
  Row,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
  Card,
} from "react-bootstrap";
import Parallax from "react-rellax";
import Aos from "aos";
import "aos/dist/aos.css";

import {
  Envelope,
  Github,
  Linkedin,
  CodeSlash,
  CaretRightFill,
  CaretLeftFill,
  Diagram3Fill,
  DropletFill,
  BarChartSteps,
  LaptopFill,
  Asterisk,
  CloudDownloadFill,
  Download,
} from "react-bootstrap-icons";

// import resume from "../img/resume.pdf";
import "./main.css";

function Main() {
  const [show, setShow] = useState(true);
  const [pos, setPos] = useState(0);
  const [projectOption, setProjectOption] = useState(1);
  const connect_size = 75;
  const totalProjects = 4;
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Projects", value: "1" },
    { name: "Experience", value: "2" },
  ];

  const handleProjectOptionNext = () => {
    if (projectOption < totalProjects) {
      setProjectOption(projectOption + 1);
    } else {
      setProjectOption(projectOption);
    }
  };

  const handleProjectOptionPrev = () => {
    if (projectOption > 1) {
      setProjectOption(projectOption - 1);
    } else {
      setProjectOption(projectOption);
    }
  };

  const controlNavbar = () => {
    if (window.scrollY) {
      setPos(window.scrollY);
      // console.log(pos, window.scrollY);
      if (window.scrollY < pos) {
        setShow(true);
      } else {
        setShow(false);
      }
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    Aos.init({ duration: 2000 });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [controlNavbar]);
  return (
    <div className="main">
      <Container
        fluid
        className={`nav_container ${show ? `visible_navbar` : `hidden_navbar`}`}
        id="home"
      >
        <Navbar expand="lg" className={`navbar `} variant="light">
          <NavbarBrand href="#">
            <h2 className="logo">vastav_kalia.</h2>
          </NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end nav">
              <Nav.Link href="#about">ABOUT</Nav.Link>
              <Nav.Link href="#xp">PROJECTS & EXPERIENCE</Nav.Link>
              <Nav.Link href="#connect">CONNECT</Nav.Link>
              <Nav.Link
                href="https://onedrive.live.com/download?cid=E867690EF3A01DEF&resid=E867690EF3A01DEF%21106&authkey=AOhSI99_rddbBXs&em=2"
                className="nav-download"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CloudDownloadFill size={30} color="#ff4151" /> RÉSUMÉ
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <div className="col-lg-8 m-auto text-center col-sm-12 col-md-12">
        <section className="intro">
          <Parallax speed={2}>
            <Image
              className="intro_logo"
              src={require("../img/VKW.jpg").default}
              width="160px"
              roundedCircle
            />
          </Parallax>
          <Parallax speed={-3}>
            <h1 className="intro_title">Vastav Kalia</h1>
          </Parallax>
          <Parallax speed={3}>
            <p className="intro_para">
              Developer, Designer & Learner |{" "}
              <span
                style={{
                  fontWeight: 800,
                  fontStyle: "italic",
                  color: "#ff4151",
                }}
              >
                Scroll down to learn more{" "}
                <span style={{ fontStyle: "normal", color: "#ff4151" }}>
                  &#11015;
                </span>
              </span>
            </p>
          </Parallax>
        </section>
        <section
          id="aboutme"
          className="welcome"
          data-aos="fade-down"
          data-aos-anchor-placement="center-bottom"
        >
          <h2 style={{ color: "#ff4151" }}>&#128075;Greetings!</h2>
          <p>
            <br />
            Thank for stopping by! <br /> Let's get to know each other. Learn
            about me, my work and my plans for the future!
          </p>
        </section>
        <section id="about" className="about">
          <Container fluid>
            <Row>
              <Col xs={12} md={6} className="about1">
                <h2 style={{ color: "#ff4151" }} data-aos="fade-down-right">
                  About me
                </h2>
                <p data-aos="fade-down">
                  Hi, my name is Vastav. I'm 23 years old.
                  <br />
                  <br />
                  I'm an aspiring web developer with a passion for designing and
                  building user-friendly, responsive and aesthetically pleasing
                  web applications and websites.
                  <br />I finished my Bachelor of Technology in 2020 and since
                  then I've worked on projects ranging from front-end web
                  development in HTML, CSS all the way to fullstack SaaS
                  applications primarily using JavaScript.
                  <br />
                  <br />
                  Besides this, I've been focusing a lot on improving my
                  profiency in ReactJS and also setting up databases with
                  MongoDB, SQL and NodeJS.
                  <br />
                  <br />
                  In my free time, I enjoy going for long runs and gym sessions.
                  I love cooking new dishes for my family. Recently, I've been
                  learning Piano as well.
                  <br />
                  <br />
                  At the moment, I'm available for any front-end developer or
                  web design oppurtunities.
                </p>
              </Col>
              <Col md={6} xs={0} className="about2" data-aos="fade-left"></Col>
            </Row>
          </Container>
        </section>
        <section id="xp" className="project">
          <div data-aos="zoom-out" data-aos-duration="2000">
            <h2 style={{ color: "#ff4151" }}>
              {" "}
              <CodeSlash color="#ff4151" /> Projects & Experience{" "}
            </h2>
            <p>
              <br />
              Below are lists of projects both at a college and professional
              level. Experience can be viewed by clicking the respective button
              below.
            </p>

            <span>
              {" "}
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    className="project-btn"
                    key={idx}
                    type="radio"
                    variant="dark"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </span>
          </div>
          <span hidden={radioValue === "1" ? false : true}>
            <div
              className="project-div"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
            >
              <div className="projects">
                <span className="projects-h2">
                  <h2 style={{ color: "#ff4151" }}>PROJECTS</h2>
                  <span className="projects-span-btn">
                    <span>
                      <Button
                        variant="dark"
                        className="projects-btn"
                        onClick={handleProjectOptionPrev}
                        disabled={projectOption === 1 ? true : false}
                      >
                        <CaretLeftFill color="#ff4151" /> Prev
                      </Button>
                    </span>
                    <span>
                      <Button
                        variant="dark"
                        className="projects-btn"
                        onClick={handleProjectOptionNext}
                        disabled={
                          projectOption === totalProjects ? true : false
                        }
                      >
                        Next <CaretRightFill color="#ff4151" />
                      </Button>
                    </span>
                  </span>
                </span>
                <div className="carousel">
                  <Card
                    className="project-card"
                    hidden={projectOption === 1 ? false : true}
                  >
                    <Card.Header>
                      <span>
                        <h3>
                          <BarChartSteps /> Stats-Py
                        </h3>
                        <p className="project-card-description">
                          <i>
                            Company Project (2019)
                            <br />
                            Software Engineer
                          </i>
                        </p>
                      </span>
                    </Card.Header>
                    <Card.Text>
                      <p className="project-card-summary">
                        I worked on StatsPy while Interning at Blue Ivory
                        Business Solutions. The application's task was data
                        aggregation, by collecting data after merging multiple
                        APIs and their features.
                        <br />
                        <br />
                        The main goal of this project was to increase employee
                        efficiency as the application was able to provide
                        real-time pre-compiled data using a set of algorithms.
                        The application was successful in reducing compiling
                        time by over 90%.
                      </p>
                    </Card.Text>
                    <Card.Footer className="project-card-footer">
                      <span className="project-card-hash">#Python</span>
                      <span className="project-card-hash">#API</span>
                      <span className="project-card-hash">#JSON</span>
                      <span className="project-card-hash">#Framework</span>
                      <span className="project-card-hash">#Git</span>
                      <span className="project-card-hash">#Windows</span>
                    </Card.Footer>
                  </Card>
                  <Card
                    className="project-card"
                    hidden={projectOption === 2 ? false : true}
                  >
                    <Card.Header>
                      <span>
                        <h3>
                          <LaptopFill /> AutoML
                        </h3>
                        <p className="project-card-description">
                          <i>
                            Company Project (2020)
                            <br />
                            Frontend Developer
                          </i>
                        </p>
                      </span>
                    </Card.Header>
                    <Card.Text>
                      <p className="project-card-summary">
                        AutoML was imagined as a SaaS application in which user
                        will be able to interact with automated machine learning
                        models. My main objective was to integrate the backend
                        REST API to the user interface, which was also designed
                        and prototyped by me.
                        <br />
                        <br />
                        The project used multiple JavaScript libraries such as
                        Redux, Loadash, Axios and ReactJS. The backend was
                        supported on a MySQL database and the data was exchanged
                        using JSON and HTTP transfer methods.
                      </p>
                    </Card.Text>
                    <Card.Footer className="project-card-footer">
                      <span className="project-card-hash">#JavaScript</span>
                      <span className="project-card-hash">#ReactJS</span>
                      <span className="project-card-hash">#HTML</span>
                      <span className="project-card-hash">#CSS</span>
                      <span className="project-card-hash">#JSON</span>
                      <span className="project-card-hash">#Redux</span>
                      <span className="project-card-hash">#MySQL</span>
                      <span className="project-card-hash">#REST API</span>
                      <span className="project-card-hash">#Git</span>
                      <span className="project-card-hash">#Windows</span>
                    </Card.Footer>
                  </Card>
                  <Card
                    className="project-card"
                    hidden={projectOption === 3 ? false : true}
                  >
                    <Card.Header>
                      <span>
                        <h3>
                          <DropletFill /> Genetic ProtCNN
                        </h3>
                        <p className="project-card-description">
                          <i>
                            Industrial R&D Project (2020)
                            <br />
                            Application Engineer, Co-lead
                          </i>
                        </p>
                      </span>
                    </Card.Header>
                    <Card.Text>
                      <p className="project-card-summary">
                        The main goal of this project was to classify protein's
                        sequence of amino acids. Our group worked on finding
                        suitable ML/DL models as replacement for alreadt
                        existing algorithms.
                        <br />
                        <br />
                        My primary focus in this project was Exploratory Data
                        Analysis and operating the splitting of data for easier
                        navigation and classification.
                      </p>
                    </Card.Text>
                    <Card.Footer className="project-card-footer">
                      <span className="project-card-hash">#Python</span>
                      <span className="project-card-hash">#Windows</span>
                      <span className="project-card-hash">#Git</span>
                      <span className="project-card-hash">
                        #Machine Learning
                      </span>
                      <span className="project-card-hash">
                        #Exploratory Data Analysis
                      </span>
                      <span className="project-card-hash">#Research</span>
                      <span className="project-card-hash">#Model Training</span>
                      <span className="project-card-hash">#CNN</span>
                    </Card.Footer>
                  </Card>
                  <Card
                    className="project-card"
                    hidden={projectOption === 4 ? false : true}
                  >
                    <Card.Header>
                      <span>
                        <h3>
                          <Diagram3Fill /> GEEC
                        </h3>
                        <p className="project-card-description">
                          <i>
                            Semester Final Project (2018-19)
                            <br />
                            Co-lead
                          </i>
                        </p>
                      </span>
                    </Card.Header>
                    <Card.Text>
                      <p className="project-card-summary">
                        Genetically Enhanced Emotional Classifier (GEEC) was a
                        project that was inspired by one of our professor's
                        previous research paper. The project involved the use of
                        an electrode device to capture Electroencephalogram
                        (EEG) signals.
                        <br />
                        <br />
                        Our research led us to propose a new type of methadology
                        focused on using mutation functions and gained accuracy
                        of upto 89.14%, while using a single electrode node.
                      </p>
                    </Card.Text>
                    <Card.Footer className="project-card-footer">
                      <span className="project-card-hash">#Python</span>
                      <span className="project-card-hash">
                        #Machine Learning
                      </span>
                      <span className="project-card-hash">#EEG</span>
                      <span className="project-card-hash">#Algorithm</span>
                      <span className="project-card-hash">#Research</span>
                      <span className="project-card-hash">#Model Training</span>
                    </Card.Footer>
                  </Card>
                </div>
              </div>
            </div>
          </span>
          <span hidden={radioValue === "2" ? false : true}>
            <div
              className="project-div"
              data-aos="zoom-in-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="3000"
            >
              <div className="projects">
                <span className="projects-h2">
                  <h2 style={{ color: "#ff4151" }}>EXPERIENCE</h2>
                  {/* <span className="projects-span-btn">
                    <span>
                      <Button variant="dark" className="projects-btn">
                        <CaretLeftFill color="#ff4151" /> Prev
                      </Button>
                    </span>
                    <span>
                      <Button variant="dark" className="projects-btn">
                        Next <CaretRightFill color="#ff4151" />
                      </Button>
                    </span>
                  </span> */}
                </span>
                <div className="carousel">
                  <Card className="project-card">
                    <Card.Header>
                      <h3>
                        <Asterisk /> Decision Tree Analytics and Service
                      </h3>
                      <span className="project-xp-details">
                        <span>
                          <p className="project-card-description">
                            <b>2020-21 (7 months)</b>
                            <i>
                              <br />
                              Frontend Developer
                              <br />
                              Internship
                            </i>
                          </p>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/company/decisiontree-analytics-&-services/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={40} />
                          </a>
                        </span>
                      </span>
                    </Card.Header>
                  </Card>
                  <br />
                  <br />
                  <Card className="project-card">
                    <Card.Header>
                      <h3>
                        <Asterisk /> Blue Ivory Group
                      </h3>
                      <span className="project-xp-details">
                        <span>
                          <p className="project-card-description">
                            <b>2019 (3 months)</b>
                            <i>
                              <br />
                              Software Engineer
                              <br />
                              Internship
                            </i>
                          </p>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/company/blue-ivory-business-solutions-pvt-ltd-/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin size={40} />
                          </a>
                        </span>
                      </span>
                    </Card.Header>
                  </Card>
                </div>
              </div>
            </div>
          </span>
        </section>
        <section id="connect" className="connect">
          <div data-aos="zoom-in-up">
            <h2 style={{ color: "#ff4151" }}>&#127759; Connect with me</h2>
            <p>
              <br />
              You can find my contact information below. Mailing might be the
              fastest method to reach out to me -{" "}
              <a href="mailto:business.vkalia@outlook.com">
                <u>
                  <b>business.vkalia@outlook.com</b>
                </u>
              </a>
            </p>
          </div>

          <Row className="connect_row">
            <Col xs={12} md={4} className="connect_col">
              <a
                href="mailto:business.vkalia@outlook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="connect_col_div"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Envelope
                    className="connect_email"
                    size={connect_size}
                    data-aos="zoom-in-up"
                  />
                </div>
              </a>
            </Col>
            <Col xs={14} md={4}>
              <a
                href="https://github.com/c0rrupt3d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="connect_col_div"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Github
                    className="connect_email"
                    size={connect_size}
                    data-aos="zoom-in-up"
                  />
                </div>
              </a>
            </Col>

            <Col xs={12} md={4}>
              <a
                href="https://www.linkedin.com/in/vastavkalia/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="connect_col_div"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Linkedin
                    className="connect_email"
                    size={connect_size}
                    data-aos="zoom-in-up"
                  />
                </div>
              </a>
            </Col>
          </Row>
        </section>
        {/* <section id="resume" className="resume">
          <div class="resume-container">
            <iframe
              className="resume-iframe"
              src="https://onedrive.live.com/embed?cid=E867690EF3A01DEF&resid=E867690EF3A01DEF%21106&authkey=AOhSI99_rddbBXs&em=2"
            >
              This browser does not support Iframe
            </iframe>
          </div>
        </section> */}
      </div>
      <section className="download-resume">
        <div className="download-resume-div" data-aos="zoom-in">
          <Row className="download-resume-div">
            <Col xs={12}>
              <h2 style={{ color: "#ff4151" }}>Download My Résumé</h2>
              <p className="download-resume-p">
                <br />
                <br />
                <a
                  href="https://onedrive.live.com/download?cid=E867690EF3A01DEF&resid=E867690EF3A01DEF%21106&authkey=AOhSI99_rddbBXs&em=2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="download-resume-a"
                >
                  <Download size={70} />
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </section>
      <section className="footer-logo">
        <div className="footer-logo-div" data-aos="fade-in-up">
          <Image src={require("../img/abstract.png").default} />
        </div>
      </section>
      <footer className="footer">
        <p>
          &#169; 2021 Vastav Kalia
          <br /> Made with &#x2665; using ReactJS
        </p>
      </footer>
    </div>
  );
}

export default Main;
