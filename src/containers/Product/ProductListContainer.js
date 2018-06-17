import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../../components/Product/ProductList';

class ProductListContainer extends Component {

    showProductList = () => {
        var result = null;

        if(this.props.products.length > 0) {
            result = this.props.products.map((product, index) => {
                return (
                    <p key={index}>{ product.name }</p>
                );
            });
        }

        return result;
    }    

    render() {

        return(
            <ProductList>
                { this.showProductList() }
            </ProductList>
        );

    };

}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ProductListContainer);