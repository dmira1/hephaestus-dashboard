import React from 'react';
import {PanelStyles, PanelHeader, PanelContent, ProductContainer, Product} from './styles'

function AllProductsPanel(props) {
    return (
        <PanelStyles>
            <PanelHeader>
                <h2>All Products</h2>
            </PanelHeader>
            <PanelContent>
                <ProductContainer>
                    <Product></Product>
                </ProductContainer>
            </PanelContent>
        </PanelStyles>
    );
}

export default AllProductsPanel;