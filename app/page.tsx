import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <>
      <div className='bg-main p-5'>
        <h1 className='text-4xl text-light logo'>Tabularium</h1>
      </div>
      <div className='p-5'>
        <Button className='uppercase'>Login</Button>
      </div>
    </>
    
  )
}

export default page
