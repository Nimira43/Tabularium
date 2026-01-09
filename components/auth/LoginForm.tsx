'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormItem, FormField, FormLabel, FormMessage } from '@/components/ui/form' 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  email: z.string().min(1, {
    message: 'Email is required.'
  }).email({
    message: 'Please enter a valid email.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  })
})

const LoginForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push('/')
  }

  return ( 
    <>
      <Card>
        <CardHeader>
          <CardTitle className='uppercase mb-6 text-center'>
            Login
          </CardTitle>
          <CardDescription className='text-center'>
            Log into your account with your credentials
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='space-y-6'
            >
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-medium'>
                      Email
                    </FormLabel>  
                    <FormControl>
                      <Input 
                        className='bg-grey-light-extra dark:bg-dark focus-visible:ring-0 focus-visible:ring-offset-0' 
                        {...field} 
                        
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-medium'>
                      Password
                    </FormLabel>  
                    <FormControl>
                      <Input 
                        type='password'
                        className='bg-grey-light-extra dark:bg-dark focus-visible:ring-0 focus-visible:ring-offset-0'
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
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
    </>
  )
}
 
export default LoginForm