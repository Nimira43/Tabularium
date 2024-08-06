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
  UserRound
} from 'lucide-react'

import Link from 'next/link'

const Sidebar = () => {
  return (
    <Command className='bg-[#ddd] rounded-none'>
      <CommandInput placeholder='Search...' />
      <CommandList>
        <CommandEmpty>No results founds</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search</CommandItem>
          <CommandItem>Calculator</CommandItem>
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
