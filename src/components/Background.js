import React, { Component } from "react";
import { Row, Col, Nav, Tab } from "react-bootstrap";

class Background extends Component {
  render() {
    return (
      <div className="box">
        <h4>Professional Background</h4>
        <div className="center-content">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      eventKey="first"
                      style={{
                        marginBottom: 10,
                        backgroundColor: "#00203FFF",
                        color: "#ADEFD1FF",
                      }}
                    >
                      Education
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="second"
                      style={{
                        marginBottom: 10,
                        backgroundColor: "#00203FFF",
                        color: "#ADEFD1FF",
                      }}
                    >
                      Accomplishments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="third"
                      style={{
                        marginBottom: 10,
                        backgroundColor: "#00203FFF",
                        color: "#ADEFD1FF",
                      }}
                    >
                      Experience
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <h3 style={{ marginBottom: 30 }}>Education</h3>
                    <hr className="divider"></hr>
                    <strong> Code The Dream School</strong>
                    <br></br>
                    Full Stack Developer-Intensive Program<br></br>
                    June 2020 - Jan 2021<br></br>
                    <br></br>{" "}
                    <strong>Northern Virginia Community College</strong>
                    <br></br>
                    Web Design and Development<br></br>
                    Jan 2019 – May 2020<br></br>
                    <br></br>
                    <strong> Universidad de Nariño, Colombia</strong>
                    <br></br>
                    Bachelor's In International Trade and Marketing<br></br>
                    2008 – 2014
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h3 style={{ marginBottom: 30 }}>Accomplishments</h3>
                    <hr className="divider"></hr>
                    <strong>Presidential Scholars’ list,</strong> May 2020,
                    Northern Virginia Community College<br></br>
                    <strong>Dean's List,</strong> Jan 2020, Northern Virginia
                    Community College
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h3 style={{ marginBottom: 30 }}>Experience</h3>
                    <hr className="divider"></hr>
                    <strong>Digital Marketing Associate</strong> (Feb 2018 – Mar
                    2020)<br></br>
                    <p className="cursive">Basilis Empire - McLean, Virginia</p>
                    Updated and maintained web pages content in Wordpress
                    <br></br>
                    Produced 50+ media pieces such as graphics and videos for
                    social media for +8 companies<br></br>
                    <br></br>
                    <strong>Volunteer </strong> (Jul 2018 – Dec 2019)<br></br>
                    <p className="cursive">
                      Nonprofit Initiative “Chin Up" - Washington D.C. Metro
                      Area
                    </p>
                    Designed and developed promotional material such as videos,
                    graphics, and flyers<br></br>
                    Designed and developed web page using HTML, CSS, JavaScript{" "}
                    <br></br>
                    <br></br> <strong>Marketing Assistant</strong> (Jan 2013 –
                    Sep 2014)<br></br>
                    <p className="cursive">Universidad de Nariño, Colombia</p>
                    Conducted 60+ online surveys<br></br>
                    Handled with 120+ clients, addressing to resolve daily
                    needs, complaints, or any problem exists with high
                    satisfaction levels<br></br>
                    Negotiated with suppliers reducing by 10-15% the total cost
                    of investment in products and services<br></br>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    );
  }
}

export default Background;
