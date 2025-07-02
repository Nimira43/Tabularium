import DashboardCard from '@/components/dashboard/DashboardCard'
import PostsTable from '@/components/posts/PostsTable'
import { FolderClosed, MessageSquare, Milestone, UserCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <div className='flex flex-col md:flex-row justify-between gap-5 mb-5'>
        <DashboardCard 
          title='Posts'
          count={48}
          icon={<Milestone className='text-main' size={72} />}
        />
        <DashboardCard 
          title='Categories'
          count={11}
          icon={<FolderClosed className='text-main' size={72} />}
        />
        <DashboardCard 
          title='Users'
          count={518}
          icon={<UserCircle className='text-main' size={72} />}
        />
        <DashboardCard 
          title='Comments'
          count={852}
          icon={<MessageSquare className='text-main' size={72} />}
        />
      </div>
      <PostsTable />
    </>
  )
}