import React from 'react';
import {PanelStyles, PanelHeading, PanelContent} from './styles';
import {EditProduct} from '../products/widgets/EditProduct';

function EditProductPanel({title, ...props}) {
    
    return ( 
        <PanelStyles>
            <PanelHeading>
                <h2>{title="Edit Product" || "Display Panel"}</h2>
            </PanelHeading>
            <PanelContent>
                <EditProduct/>
            </PanelContent>
        </PanelStyles>
    );
}

export default EditProductPanel;