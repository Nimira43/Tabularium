import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious } from '../ui/pagination'

const PostsPagination = () => {
  return ( 
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href='#' />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href='#'>3</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>  
  )
}
  
export default PostsPagination