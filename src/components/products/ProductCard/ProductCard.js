import React from 'react';
import {ProductCardStyles, ProductCardDescription, ProductCardName, ProductCardPrice, ProductCardImage} from './styles'

function ProductCard ({children, product, ...props})  {
  const {productName, productPrice, imageUrl, productDescription} = {...product}
  return (
        <ProductCardStyles  {...props}>
          <ProductCardImage src={imageUrl}  alt={productName} width="320" height="320"/>
          <ProductCardName>{productName}</ProductCardName>
          <ProductCardPrice>${productPrice}</ProductCardPrice>
          <ProductCardDescription>{productDescription}</ProductCardDescription>
        </ProductCardStyles>
  )
}

export default ProductCard