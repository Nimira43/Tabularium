'use client'

import Backbutton from '@/components/BackButton'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormItem, FormField, FormLabel, FormMessage } from '@/components/ui/form' 

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