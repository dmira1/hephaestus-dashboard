import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor"
import ProductPreview from "static/upload.png"


function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState("Product Name")
  const [productPrice, setProductPrice] = useState("123.45")
  const [productImage, setProductImage] = useState(ProductPreview)
  const [productDescription, setProductDescription] = useState("Product Description")
  const formatter = useNumberFormat()
  function handleProductName (name){
    setProductName(name)
  }
  function handleProductPrice (price){
    setProductPrice(formatter(price))
  }
  function handleProductDescription (desc)
  {
    setProductDescription(desc)
  }
  return (
        <AddProductStyles  {...props}>
          <ProductEditor
            productName={productName}
            productPrice={productPrice}
            productImage={productImage}
            productDescription={productDescription}
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            setProductImage={setProductImage}
            handleProductDescription={handleProductDescription}
            />
        </AddProductStyles>
  )
}

export default AddProduct