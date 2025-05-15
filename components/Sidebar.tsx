import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@/components/ui/command'
import { RxDashboard } from "react-icons/rx"
import { BsNewspaper } from "react-icons/bs"
import { PiFolders } from "react-icons/pi"
import { ImCreditCard } from "react-icons/im"
import { TbSettings } from "react-icons/tb"
import Link from 'next/link'

const Sidebar = () => {
  return ( 
    <Command className='bg-grey-light-extra border-r-[1px] border-main rounded-none'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <RxDashboard className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='/' className='uppercase'>
              Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <BsNewspaper className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='/posts' className='uppercase'>
              Posts
            </Link>
          </CommandItem>
          <CommandItem>
            <PiFolders className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='#' className='uppercase'>
              Categories
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>Profile</CommandItem>
          <CommandItem>Billing</CommandItem>
          <CommandItem>Settings</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

   )
}
 
export default Sidebar