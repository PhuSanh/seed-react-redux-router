import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return(
            <p>This is product list { this.props.children }</p>
        );
    };

}

export default ProductList;