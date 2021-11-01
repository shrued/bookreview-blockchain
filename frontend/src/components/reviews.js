import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const endpoint = "/get_chain";
class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }
  componentDidMount() {
    axios.get(endpoint).then((res) => {
      const reviews = res.data.chain;
      this.setState({ reviews });
    });
  }
  render() {
    return (
      <Container>
        <h3>
          <b> Reviews </b>
        </h3>
        <p>(Sync to get the latest reviews in the blockchain)</p>
        <Table responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Review</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {this.state.reviews
              .slice(0)
              .reverse()
              .map((transaction) =>
                transaction.reviews.map((t) => (
                  <tr key={t}>
                    <td>
                      <b style={{ color: "#007bff" }}>{t.title}</b>
                    </td>
                    <td>
                      <b style={{ color: "#007bff" }}>{t.author}</b>
                    </td>
                    <td>
                      <b style={{ color: "#007bff" }}>{t.review} </b>
                    </td>
                    <td>
                      <b style={{ color: "#007bff" }}>{t.time}</b>
                    </td>
                  </tr>
                ))
              )}
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Reviews;
