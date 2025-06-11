import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { LayoutDashboard, Milestone, FolderClosed, UserCircle, Wallet, Settings } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  return ( 
    <Command className='bg-grey-light-extra dark:bg-dark text-dark dark:text-light rounded-none'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <LayoutDashboard className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='/' className='uppercase'>
              Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Milestone className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='/posts' className='uppercase'>
              Posts
            </Link>
          </CommandItem>
          <CommandItem>
            <FolderClosed className='uppercase mr-2 h-4 w-4 text-main' />
            <Link href='#' className='uppercase'>
              Categories
            </Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Settings'>
          <CommandItem>
            <UserCircle className='text-main mr-2 h-4 w-4' />
            <span className='uppercase'>Account</span>
            <CommandShortcut>^A</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Wallet className='text-main mr-2 h-4 w-4' />
            <span className='uppercase'>Payments</span>
            <CommandShortcut>^P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='text-main mr-2 h-4 w-4' />
            <span className='uppercase'>Settings</span>
            <CommandShortcut>^S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

   )
}
 
export default Sidebar