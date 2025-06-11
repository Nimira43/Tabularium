import { Card, CardContent } from '../ui/card'
import { LucideIcon, Milestone } from 'lucide-react'

interface DashboardCardProps {
  title: string
  count: number
  icon:  React.ReactElement<LucideIcon>
}

const DashboardCard = ({ title, count, icon}: DashboardCardProps) => {
  return ( 
    <Card className='bg-grey-light-extra dark:bg-dark  p-4 pb-0'>
      <CardContent>
        <h3 className='text-3xl text-center mb-4 font-medium text-dark dark:text-light'>{title}</h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-5xl font-normal text-dark dark:text-light'>{count}</h3>
        </div>
      </CardContent>

    </Card>
   )
}
 
export default DashboardCard