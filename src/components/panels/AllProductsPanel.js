import React from 'react';
import {PanelStyles, PanelHeading, PanelContent, ProductContainer, Product} from './styles'

function AllProductsPanel(props) {
    return (
        <PanelStyles>
            <PanelHeading>All Products</PanelHeading>
            <PanelContent>
                <ProductContainer>
                    <Product></Product>
                </ProductContainer>
            </PanelContent>
        </PanelStyles>
    );
}

export default AllProductsPanel;