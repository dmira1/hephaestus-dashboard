import React from 'react';
import {PanelStyles, PanelHeader, PanelContent} from './styles';
import {EditProduct} from '../products/widgets/EditProduct';

function EditProductPanel({title, ...props}) {
    
    return ( 
        <PanelStyles>
            <PanelHeader>
                <h2>{title || "Edit Products"}</h2>
            </PanelHeader>
            <PanelContent>
                <EditProduct/>
            </PanelContent>
        </PanelStyles>
    );
}

export default EditProductPanel;