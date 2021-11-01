import React, { Component } from "react";
import { Form, Container, Col, Row, Button } from "react-bootstrap";
import axios from "axios";

const postEndpoint = "/add_review";
const getEndpoint = "/get_chain";
class Submit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: "",
      review: "",
      time: "",
      title: "",
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleReview = this.handleReview.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleAuthor(event) {
    this.setState({ author: event.target.value });
  }
  handleReview(event) {
    this.setState({ review: event.target.value });
  }
  componentDidMount() {
    axios.get(getEndpoint).then((res) => {});
  }

  handleSubmit(event) {
    event.preventDefault();

    axios.post(postEndpoint, { title: this.state.title, author: this.state.author, review: this.state.review, time: this.state.time }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <Container>
        <br />
        <h3>
          <b>Book Reviews</b>
        </h3>
        <h4>
          <b style={{ color: "#007bff" }}>Submit book reviews.</b>{" "}
        </h4>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Title
            </Form.Label>
            <Col sm="8">
              <Form.Control onChange={this.handleTitle} value={this.state.title} placeholder="Title" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Author
            </Form.Label>
            <Col sm="8">
              <Form.Control onChange={this.handleAuthor} value={this.state.author} placeholder="Author" />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Review
            </Form.Label>
            <Col sm="8">
              <Form.Control onChange={this.handleReview} value={this.state.review} placeholder="Review" />
            </Col>
            {/* <Col sm="0.5">
              <b> Review </b>
            </Col> */}
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm="5">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <br />
        <br />
      </Container>
    );
  }
}

export default Submit;
