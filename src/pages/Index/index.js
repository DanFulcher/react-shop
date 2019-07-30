import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../../components/Product';


const Index = ({ items, addToCart }) => {
  const itemList = items.map(item => (
    <Product key={item.id} {...item} addToCart={addToCart} />
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
};


Index.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object,
  ),
  addToCart: PropTypes.func.isRequired,
};

Index.defaultProps = {
  items: [],
};

export default Index;
