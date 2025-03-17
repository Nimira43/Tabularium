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
            <TableHead>User</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    </div>
  )
}
 
export default TicketsTable