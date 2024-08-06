import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'

import {
  CircleGauge,
  NotebookPen,
  FolderCode,
  Terminal,
  Settings,
  UserRound,
  Mail,
  Phone,
} from 'lucide-react'

import Link from 'next/link'

const Sidebar = () => {
  return (
    <Command className='bg-[#ddd] rounded-none'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results founds</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>
            <CircleGauge className='mr-2 h-4 w-4' />
            <Link href='/'>Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <NotebookPen className='mr-2 h-4 w-4' />
            <Link href='/posts'>Documentation</Link>
          </CommandItem>
          <CommandItem>
            <FolderCode className='mr-2 h-4 w-4' />
            <Link href='#'>Code Editor</Link>
          </CommandItem>
          <CommandItem>
            <Terminal className='mr-2 h-4 w-4' />
            <Link href='/'>Terminal</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading='Quick Access'>
          <CommandItem>
            <UserRound className='mr-2 h-4 w-4' />
            <span>Profile</span>
            <CommandShortcut>^u</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Mail className='mr-2 h-4 w-4' />
            <span>Emails</span>
            <CommandShortcut>^e</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Phone className='mr-2 h-4 w-4' />
            <span>Contacts</span>
            <CommandShortcut>^c</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className='mr-2 h-4 w-4' />
            <span>Settings</span>
            <CommandShortcut>^s</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
export default Sidebar  
