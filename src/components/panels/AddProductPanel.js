import React from 'react';
import {PanelStyles, PanelHeading, PanelContent} from './styles';
/* import {ProductEditor} from 'products/ProductEditor'; */

function AddProductPanel({title, ...props}) {
    return ( 
        <PanelStyles>
            <PanelHeading>
                <h2>{title || "Display Panel"}</h2>
            </PanelHeading>
            <PanelContent>
                {/* <ProductEditor/> */}
            </PanelContent>
        </PanelStyles>
    );
}

export default AddProductPanel;