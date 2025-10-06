'use client'

import Backbutton from '@/components/BackButton'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormItem, FormField, FormLabel, FormMessage } from '@/components/ui/form' 
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import posts from '@/data/posts'

const formSchema = z.object({
  
})

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