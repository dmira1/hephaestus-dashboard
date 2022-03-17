import React from 'react';

import {ProductDataEntryFormStyles, ProductImage, ProductName, ProductPrice, ProductDescription, TextArea} from './styles';
import {Label, Input} from 'ui/forms';
import {ProductImageDropBox} from '../ProductImageDropBox';

function ProductDataEntryForm ({children, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
          <ProductImage>
            <Label>Product Image</Label>
            <ProductImageDropBox/>
          </ProductImage>

          <fieldset>
            <ProductName>
              <Label>Product Name</Label>
              <Input/>
            </ProductName>
            <ProductPrice>
              <Label>Product Price</Label>
              <Input/>
            </ProductPrice>
          </fieldset>

          <ProductDescription>
            <Label>Product Description</Label>
            <textarea rows={6}/>
          </ProductDescription>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm