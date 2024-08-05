import Image from 'next/image'
import Link from 'next/link'
import logo from '../images/logo.png'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const Navbar = () => {
  return ( 
    <div className='bg-[#111] dark:bg-[#87ceeb] py-2 px-5 flex justify-between text-[#ff4500]'>
      <Link href='/'>
        <Image src={logo} alt='NimiraTech Dashboard' width={40} />
        
      </Link>
      <Avatar>
        <AvatarFallback className='bg-[#87ceeb]'>NR</AvatarFallback>
      </Avatar>
    </div>
   )
}
 
export default Navbar