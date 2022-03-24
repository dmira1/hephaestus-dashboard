import React from 'react';
import { useNavigate } from 'react-router-dom';

import {AiOutlineCloudUpload, AiOutlineCheckCircle} from 'react-icons/ai'

import {EditorFeedBackStyles, FeedBackMessage, FeedBack, FeedBackOption} from './styles'
import {Button} from "ui/buttons"

function EditorFeedBack ({children, status, writeCompleted, ...props})  {
  const navigator = useNavigate();
  return (
        <EditorFeedBackStyles  {...props}>
          {
          !status
          ?
          <FeedBack>
            <AiOutlineCheckCircle color="green" size="12rem"/>
            <FeedBackMessage>
              Product Uploaded Successfully
            </FeedBackMessage>
          </FeedBack>
          :
          <FeedBack>
            <AiOutlineCloudUpload color="green" size="12rem"/>
            <FeedBackMessage>
              Uploading New Product
            </FeedBackMessage>
          </FeedBack>
          }

          <FeedBackOption>
            <Button bc="#B01B1B" 
                    color="white" 
                    onClick={()=> writeCompleted(false)}
                    disabled={status}
                    >Add Another Product</Button>
            <Button bc="#B01B1B" 
                    color="white"
                    onClick={()=> navigator('/dashboard')}
                    >View All Products</Button>
          </FeedBackOption>
        </EditorFeedBackStyles>
  )
}

export default EditorFeedBack