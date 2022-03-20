import React from 'react';
import {PanelStyles, PanelHeading, PanelContent} from './styles';
import {AddProduct} from '../products/widgets/AddProduct';

function AddProductPanel({title, ...props}) {
    return ( 
        <PanelStyles>
            <PanelHeading>
                <h2>{title || "Display Panel"}</h2>
            </PanelHeading>
            <PanelContent>
                <AddProduct/>
            </PanelContent>
        </PanelStyles>
    );
}

export default AddProductPanel;