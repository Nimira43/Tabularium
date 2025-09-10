import { Pagination, PaginationContent, PaginationItem, PaginationPrevious } from '../ui/pagination'

const PostsPagination = () => {
  return ( 
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
      </PaginationContent>
    </Pagination>  
  )
}
  
export default PostsPagination