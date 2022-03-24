import React, {useState} from 'react';
import { useNumberFormat } from 'hooks/useNumberFormat';
import { useAddNewProduct } from 'hooks/useAddNewProduct';
import {AddProductStyles} from './styles'
import {ProductEditor} from "components/products/ProductEditor"
import {EditorFeedBack} from 'components/products/EditorFeedBack'
import ProductPreview from "static/upload.png"

const defaults={
  name: "Product Name",
  price: 123.45,
  description: "This is where you describe the item to be added into the storefront."
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [loading, productLoader] = useAddNewProduct();
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

  function handleSubmit (e){
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductName(defaults.name)
    setProductPrice(defaults.price)
    setProductDescription(defaults.description)
  }


  if(isWriting){
    return <EditorFeedBack status={loading} writeCompleted={setIsWriting}/>
  }else{
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
          handleSubmit={handleSubmit}
          />
      </AddProductStyles>
    )
  }
}

export default AddProduct