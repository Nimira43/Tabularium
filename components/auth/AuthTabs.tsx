import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'

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
    </Tabs>
   )
}
 
export default AuthTabs