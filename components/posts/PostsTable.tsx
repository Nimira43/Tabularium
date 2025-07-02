import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import posts from '@/data/posts'
import { Post } from '@/types/posts'

interface PostsTableProps {
  limit?: number
  title?: string
}

const PostsTable = ({
  limit,
  title
}: PostsTableProps) => {
  return ( 
    <div>Posts Table</div>
   )
}
 
export default PostsTable