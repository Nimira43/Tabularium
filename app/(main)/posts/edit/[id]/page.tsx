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
import { useToast } from '@/hooks/use-toast'

const formSchema = z.object({
  title: z.string().min(1, {
    message: 'Title is required.'
  }),
  body: z.string().min(1, {
    message: 'Body is required.'
  }),
  author: z.string().min(1, {
    message: 'Author is required.'
  }),
  date: z.string().min(1, {
    message: 'Date is required.'
  }),
})

interface PostEditPageProps {
  params: {
    id: string
  }
}

const PostEditPage = ({ params }: PostEditPageProps) => {
  const { toast } = useToast()
  const post = posts.find((post) => post.id === params.id)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post?.title || '',
      body: post?.body || '',
      author: post?.author || '',
      date: post?.date || ''
    }
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    toast({
      title: 'Post has been updated successfully.',
      description: `Updated by ${post?.author} on ${post?.date}` 
    })
  }

  return ( 
    <>
      <Backbutton 
        text='Back to Posts'
        link='/posts'
      />
      <h3 className='text-2xl mb-4'>Edit Post</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='space-y-8'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='uppercase text-xs font-medium'  
                >
                  Title
                </FormLabel>  
                <FormControl>
                  <Input 
                    className='bg-grey-light-extra dark:bg-grey-dark focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Enter Title' 
                    {...field} 
                    
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='body'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='uppercase text-xs font-medium'  
                >
                  Body
                </FormLabel>  
                <FormControl>
                  <Textarea 
                    className='bg-grey-light-extra dark:bg-grey-dark focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Enter Body' 
                    {...field} 
                    
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='author'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='uppercase text-xs font-medium'  
                >
                  Author
                </FormLabel>  
                <FormControl>
                  <Input 
                    className='bg-grey-light-extra dark:bg-grey-dark focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Enter Author' 
                    {...field} 
                    
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='date'
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className='uppercase text-xs font-medium'  
                >
                  Date
                </FormLabel>  
                <FormControl>
                  <Input 
                    className='bg-grey-light-extra dark:bg-grey-dark focus-visible:ring-0 focus-visible:ring-offset-0'
                    placeholder='Enter Date' 
                    {...field} 
                    
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className='w-full bg-main hover:bg-main-dark text-light uppercase btn-hover'
          >
            Update Post
          </Button>
        </form>
      </Form>
    </>
  )
}
 
export default PostEditPage