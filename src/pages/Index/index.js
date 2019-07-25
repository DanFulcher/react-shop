import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../../components/Product';

class Index extends Component {

    render() {

        let itemList = this.props.items.map(item=> {
            return (
                <Product key={item.id} item={item} addToCart={this.props.addToCart} />
            )
        })

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
        )        
    }
}
export default Index;