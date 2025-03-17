import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption} from '@/components/ui/table'
import Link from 'next/link'
import tickets from '@/data/tickets'
import { Ticket } from '@/types/tickets'

interface TicketsTablesProps {
  limit?: number
  title?: string
}

const TicketsTable = ({limit, title}: TicketsTablesProps) => {
  return (  
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>
        {title ? title : 'Tickets' }
      </h3>
      <Table>
        <TableCaption>Recent Tickets </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Issue</TableHead>
            <TableHead className='hidden md:table-cell'>User</TableHead>
            <TableHead className='hidden md:table-cell text-right'>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell>{ticket.title}</TableCell>
              <TableCell
                className='hidden md:table-cell'
              >
                {ticket.author}
              </TableCell>
              <TableCell
                className='hidden md:table-cell text-right'
              >
                {ticket.date}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
 
export default TicketsTable