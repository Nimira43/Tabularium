export interface Ticket {
  id: string
  title: string
  body: string
  author: string
  comments: TicketComment[]
}

export interface TicketComment {
  id: string
  text: string
  username: string
}