import DashboardCard from "@/components/dashboard/DashboardCard"
import { Ticket } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard
          title='Tickets'
          count={27}
          icon={<Ticket className='text-[#111]' size={72} />}
         />
      </div>
    </>
  )
}
