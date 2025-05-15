import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator } from '@/components/ui/command'
import { RxDashboard } from "react-icons/rx"
import { BsNewspaper } from "react-icons/bs"
import { PiFolders } from "react-icons/pi"
import { ImCreditCard } from "react-icons/im"
import { TbSettings } from "react-icons/tb"
import Link from 'next/link'

const Sidebar = () => {
  return ( 
    <Command>
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading='Suggestions'>
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
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