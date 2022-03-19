import React from 'react';
import {PanelStyles, PanelHeading, PanelContent, ProductContainer, Product} from './styles'

function AllProductsPanel(props) {
    return (
        <PanelStyles>
            <PanelHeading>
                <h2>All Products</h2>
            </PanelHeading>
            <PanelContent>
                <ProductContainer>
                    <Product></Product>
                </ProductContainer>
            </PanelContent>
        </PanelStyles>
    );
}

export default AllProductsPanel;