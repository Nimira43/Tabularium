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
  name: z.string().min(1, {
    message: 'Name is required.'
  }),
  email: z.string().min(1, {
    message: 'Email is required.'
  }).email({
    message: 'Please enter a valid email.'
  }),
  password: z.string().min(1, {
    message: 'Password is required.'
  }),
  confirmPassword: z.string().min(1, {
    message: 'Confirm password is required.'
  })
})

const RegisterForm = () => {
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
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
            Register
          </CardTitle>
          <CardDescription className='text-center'>
            Enter the credentials below to register
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
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-medium'>
                      Name
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='uppercase text-xs font-medium'>
                      Confirm Password
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
 
export default RegisterForm