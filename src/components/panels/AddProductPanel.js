import React from 'react';
import {PanelStyles, PanelHeader, PanelContent} from './styles';
import {AddProduct} from '../products/widgets/AddProduct';

function AddProductPanel({title, ...props}) {
    
    return ( 
        <PanelStyles>
            <PanelHeader>
                <h2>{title="Add Product" || "Display Panel"}</h2>
            </PanelHeader>
            <PanelContent>
                <AddProduct/>
            </PanelContent>
        </PanelStyles>
    );
}

export default AddProductPanel;