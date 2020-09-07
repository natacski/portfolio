import React, { Component } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import logo from "../2.png";
import logo1 from "../3.png";
import logo2 from "../4.png";
import logo3 from "../5.png";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillsData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url =
      "https://api.airtable.com/v0/app8Jy6nb6Er7rwtk/Skills?api_key=keyclOytaXo7NHQ8M";

    fetch(url).then((resp) => {
      resp.json().then((json) => {
        this.setState({ skillsData: json });
      });
    });
  };

  render() {
    const { skillsData } = this.state;

    return (
      <div className="box">
        <h4>Profile</h4>
        <Row>
          <Col>
            <div>
              <img src={logo} alt="profile"></img>
            </div>
          </Col>
        </Row>

        <Row>
          {" "}
          <Col>
            <h3 className="App" style={{ marginTop: 30 }}>
              About
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="center-content">
              Exceptionally creative and bilingual young professional with a
              diverse and international educational background including,
              Digital Marketing with a record of successful planning and
              execution of social media strategies and Entry Level Front End Web
              Developer with deep knowledge in a variety of principles and
              techniques of website construction and maintenance. Possesses a
              great passion for technology and an interest in forward-thinking
              projects and companies. Recognizes this is an ever-changing world
              and plans to stay one step ahead. Enjoys exploring the latest
              trends.
            </p>
            <hr className="divider"></hr>
          </Col>
        </Row>

        <Row>
          {" "}
          <Col>
            <h3 className="App" style={{ marginTop: 30 }}>
              Skills
            </h3>
          </Col>
        </Row>
        <div className="center-content" style={{ marginLeft: 30 }}>
          <Container>
            <Row>
              <Col sm={6} md={4}>
                <Image className="circleImg" src={logo1} roundedCircle />
                <Card style={{ width: "15rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {skillsData.records
                        ? skillsData.records[2].fields.Fields
                        : null}
                    </Card.Title>
                    <Card.Text>
                      {skillsData.records
                        ? skillsData.records[2].fields.Skill1
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[2].fields.Skill2
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[2].fields.Skill3
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[2].fields.Skill4
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[2].fields.Skill5
                        : null}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <br></br>

              <Col sm={6} md={4}>
                <Image className="circleImg" src={logo2} roundedCircle />
                <Card style={{ width: "15rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {skillsData.records
                        ? skillsData.records[1].fields.Fields
                        : null}
                    </Card.Title>
                    <Card.Text>
                      {skillsData.records
                        ? skillsData.records[1].fields.Skill1
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[1].fields.Skill2
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[1].fields.Skill3
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[1].fields.Skill4
                        : null}
                      {skillsData.records
                        ? skillsData.records[1].fields.Skill5
                        : null}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col sm={6} md={4}>
                <Image className="circleImg" src={logo3} roundedCircle />
                <Card style={{ width: "15rem" }}>
                  <Card.Body>
                    <Card.Title>
                      {skillsData.records
                        ? skillsData.records[0].fields.Fields
                        : null}
                    </Card.Title>
                    <Card.Text>
                      {skillsData.records
                        ? skillsData.records[0].fields.Skill1
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[0].fields.Skill2
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[0].fields.Skill3
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[0].fields.Skill4
                        : null}
                      <br></br>
                      {skillsData.records
                        ? skillsData.records[0].fields.Skill5
                        : null}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Profile;
