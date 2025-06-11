import DashboardCard from '@/components/dashboard/DashboardCard'
import { Milestone } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard 
          title='Posts'
          count={48}
          icon={<Milestone className='text-main' size={72} />}
        />
      </div>
    </>
  )
}