import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/logo.png'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

const Navbar = () => {
  return ( 
    <div className='bg-[#111] dark:bg-[#ddd] py-2 px-5 flex justify-between text-[#111]'>
      <Link href='/'>
        <Image src={logo} alt='NimiraTech Dashboard' width={40} /> 
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className='focus:outline-none'>
          <Avatar>
            <AvatarFallback className='bg-[#ddd]'>NR</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-[#ddd]'>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href='/profile'>
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Projects</DropdownMenuItem>
          <DropdownMenuItem>Research</DropdownMenuItem>
          <DropdownMenuItem>
            <Link href='auth'>
              Logout
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>  
      </DropdownMenu>
    </div>
   )
} 
export default Navbar