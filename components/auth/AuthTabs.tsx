import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const AuthTabs = () => {
  return ( 
    <Tabs
      defaultValue='account'
      className='w-[400px]'
    >
      <TabsList className='grid w-full grid-cols-2'>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>Content 2333</TabsContent>
      <TabsContent value='password'>Content 4242</TabsContent>
    </Tabs>
   )
}
 
export default AuthTabs