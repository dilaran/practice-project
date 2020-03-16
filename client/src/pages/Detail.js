import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Items from "../components/Items";
import SaveBtn from "../components/SaveBtn";
import items from "../items.json";

class Detail extends Component {
  state = {
    items
  };
  render() {
    return (
      <Container fluid>
        <br /> <br />
        <Row>
          <Container>
            <h2>Shop All Items</h2>
            {this.state.items.map(item => (
              <Items {...item} key={item.id} />
            ))}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default Detail;
