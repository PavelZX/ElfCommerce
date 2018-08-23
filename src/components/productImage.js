import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class ProductImage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row>
        <Col md={2} style={{ paddingRight: 0 }}>
          {this.props.thumbnails.map(thumbnail => (
            <img src={thumbnail} className="product-detail-img" />
          ))}
        </Col>
        <Col md={10}>
          <img src={this.props.mainImage} style={{ width: '100%' }} />
        </Col>
      </Row>
    );
  }
}

export default ProductImage;