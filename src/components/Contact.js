import React, { Component } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import logo4 from "../7.png";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactData: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url =
      "https://api.airtable.com/v0/app8Jy6nb6Er7rwtk/Contact?api_key=keyclOytaXo7NHQ8M";

    fetch(url).then((resp) => {
      resp.json().then((json) => {
        this.setState({ contactData: json });
      });
    });
  };

  render() {
    const { contactData } = this.state;

    return (
      <div className="box">
        <h4>Contact</h4>
        <Container className="justify-content-md-center">
          <Row>
            <Col>
              <div>
                <img src={logo4} alt="banner"></img>
              </div>
            </Col>
          </Row>
          <br></br>

          <Row>
            <div className="responsive">
              <Col lg="auto">
                {/* <div className="responsive"> */}
                <div>
                  <h5 className="App" style={{ marginBottom: 20 }}>
                    {contactData.records
                      ? contactData.records[0].fields.Name
                      : null}
                  </h5>
                  <div>
                    <Table>
                      <thead>
                        <tr>
                          <th>Phone Number</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {contactData.records
                              ? contactData.records[0].fields.Phone
                              : null}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table>
                      <thead>
                        <tr>
                          <th>E-mail</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {" "}
                            {contactData.records
                              ? contactData.records[0].fields.Email
                              : null}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table>
                      <thead>
                        <tr>
                          <th>LinkedIn</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://www.linkedin.com/in/natalia-cielinski-7a8031142/"
                              target="blank"
                            >
                              {contactData.records
                                ? contactData.records[0].fields.LinkedIn
                                : null}
                            </a>{" "}
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>Github</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a
                              href="https://github.com/natacski"
                              target="blank"
                            >
                              {contactData.records
                                ? contactData.records[0].fields.Github
                                : null}
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
