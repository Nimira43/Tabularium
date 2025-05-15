import Link from 'next/link'
import { VscDashboard } from 'react-icons/vsc'

const Navbar = () => {
  return ( 
    <div className='bg-grey-light-extra dark:bg-dark text-dark dark:text-light py-2 px-5 flex justify-between'>
      <Link href='/'>
        <VscDashboard className='text-main text-3xl'/>
      </Link>
    </div>
  )
}

export default Navbar