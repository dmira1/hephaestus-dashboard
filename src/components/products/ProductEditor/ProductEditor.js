import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm'
import {ProductPreview} from './../ProductPreview'
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, productImage, productDescription, setProductImage, handleProductName, handleProductPrice, handleProductDescription, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
            <ProductDataEntryForm
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleProductDescription={handleProductDescription}
            />
            <ProductPreview
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
            />
        </ProductEditorStyles>
  )
}

export default ProductEditor