import React, { Component } from 'react';

class ProductList extends Component {

    render() {
        return(
            <div>This is product list { this.props.children }</div>
        );
    };

}

export default ProductList;