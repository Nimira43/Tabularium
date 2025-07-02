export interface Post {
  id: string
  title: string
  body: string
  author: string
  date: string
  comments: PostComment[]
}