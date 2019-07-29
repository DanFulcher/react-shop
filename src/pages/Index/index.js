import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../../components/Product';

class Index extends Component {
  render() {
    const itemList = this.props.items.map(item => (
                <Product key={item.id} {...item} addToCart={this.props.addToCart} />
    ));

    return (
            <section className="homepage content">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3>Home</h3>
                        </Col>
                    </Row>
                </Container>
                <div className="products">
                    <Container>
                        <Row>
                            {itemList}
                        </Row>
                    </Container>
                </div>
            </section>
    );
  }
}

Index.propTypes = {
  items: PropTypes.array,
  addToCart: PropTypes.func,
};
export default Index;
