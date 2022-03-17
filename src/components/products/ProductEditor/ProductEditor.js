import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm'
import {ProductPreview} from './../ProductPreview'
import {ProductEditorStyles} from './styles'
function ProductEditor ({children, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
            <h2>ProductEditor Component</h2>
            {children}

        </ProductEditorStyles>
  )
}

export default ProductEditor