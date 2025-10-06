'use client'

import Backbutton from '@/components/BackButton'
import * as z from 'zod'
import { useForm } from 'react-hook-form'

const PostEditPage = () => {
  return ( 
    <>
      <Backbutton 
        text='Back to Posts'
        link='/posts'
      />
    </>
  )
}
 
export default PostEditPage