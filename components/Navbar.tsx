import Link from 'next/link'
import { VscDashboard } from 'react-icons/vsc'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'


const Navbar = () => {
  return ( 
    <div className='bg-grey-light-extra dark:bg-dark text-dark dark:text-light py-2 px-5 flex justify-between'>
      <Link href='/'>
        <VscDashboard className='text-main text-4xl mt-1'/>
        
      </Link>
      <Avatar>
        <AvatarImage src='#' alt='#' />
        <AvatarFallback className='bg-main text-light'>NR</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Navbar