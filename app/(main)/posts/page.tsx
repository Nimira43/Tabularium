import Backbutton from '@/components/BackButton'
import PostsTable from '@/components/posts/PostsTable'

const PostsPage = () => {
  return ( 
    <>
      <Backbutton 
        text='Go Back'
        link='/'
      /> 
      <PostsTable />
    </>
  )
}
 
export default PostsPage