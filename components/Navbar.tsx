import Link from 'next/link'
import { VscDashboard } from 'react-icons/vsc'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'

const Navbar = () => {
  return ( 
    <div className='bg-grey-light-extra dark:bg-dark text-dark dark:text-light py-2 px-5 flex justify-between '>
      <Link href='/'>
        <VscDashboard className='text-main h-10 w-10 mt-1'/>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarImage src='#' alt='#' />
            <AvatarFallback className='bg-main hover:bg-dark text-light btn-hover'>NR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/profile'>
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href='/auth'>
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default Navbar