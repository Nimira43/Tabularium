import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'

const AuthTabs = () => {
  return ( 
    <Tabs
      defaultValue=''
      className='w-[400px]'
    >
      <TabsList>
        <TabsTrigger value=''>Value</TabsTrigger>
        <TabsTrigger value=''>Value</TabsTrigger>
      </TabsList>
      <TabsContent value=''>Content</TabsContent>
      <TabsContent value=''>Content</TabsContent>
    </Tabs>
   )
}
 
export default AuthTabs