import React from 'react';
import {PanelStyles, PanelHeading, PanelContent, ProductContainer, Product} from './styles'

function Panels(props) {
    return (
        <PanelStyles>
            <PanelContent>
                <ProductContainer>
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </ProductContainer>
            </PanelContent>
        </PanelStyles>
    );
}

export default Panels;