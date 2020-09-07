import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projectsData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url =
      "https://api.airtable.com/v0/app8Jy6nb6Er7rwtk/Projects?api_key=keyclOytaXo7NHQ8M";

    fetch(url).then((resp) => {
      resp.json().then((json) => {
        console.log(json);
        this.setState({ projectsData: json });
      });
    });
  };

  render() {
    const { projectsData } = this.state;

    return (
      <div className="box">
        <h4>Projects</h4>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[3].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[3].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[3].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[3].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[3].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[3].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[4].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[4].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[4].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[4].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[4].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[4].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[5].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[5].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[5].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[5].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[5].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[5].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
        <br></br>{" "}
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[0].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[0].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[0].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[0].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[0].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[0].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[1].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[1].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[1].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[1].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[1].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[1].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={
                  projectsData.records
                    ? projectsData.records[2].fields.Image[0].url
                    : null
                }
              />
              <Card.Body>
                <Card.Title>
                  <h5>
                    {projectsData.records
                      ? projectsData.records[2].fields.Name
                      : null}
                  </h5>
                </Card.Title>
                <Card.Text>
                  <h6>
                    {projectsData.records
                      ? projectsData.records[2].fields.Skills
                      : null}
                  </h6>
                  {projectsData.records
                    ? projectsData.records[2].fields.Description
                    : null}
                </Card.Text>
                <div className="App">
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                      marginRight: 20,
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[2].fields.URL
                        : null
                    }
                    target="blank"
                  >
                    Preview
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#00203FFF",
                      color: "#ADEFD1FF",
                      borderColor: "#00203FFF",
                    }}
                    href={
                      projectsData.records
                        ? projectsData.records[2].fields.Github
                        : null
                    }
                    target="blank"
                  >
                    Repo
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br></br>
      </div>
    );
  }
}

export default Projects;
