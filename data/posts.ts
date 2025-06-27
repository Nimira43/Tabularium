import { Post } from '@/types/posts'

const posts: Post[] = [
  {
    id: '1',
    title: 'React: The Declarative Revolution',
    body: 'React introduced a paradigm shift in UI development with its component-based architecture...',
    author: 'Eddie Sterling',
    date: '2024-06-23',
    comments: [
      { 
        id: '1', 
        text: 'React hooks changed everything!', username: 'Lena' 
      },
      { id: '2', 
        text: 'I still miss class components.', username: 'Theo' 
      },
    ],
  },
  {
    id: '2',
    title: 'Vue.js: Simplicity Meets Power',
    body: 'Vue.js combines an intuitive API with powerful features like the Composition API...',
    author: 'Marco Delacroix',
    date: '2024-04-28',
    comments: [
      { 
        id: '1', 
        text: 'Vue transitions are smooth!', username: 'Celeste' },
      { id: '2', 
        text: 'Feels like the best of React and Angular.', 
        username: 'Liam' 
      },
    ],
  },
  {
    id: '3',
    title: 'Angular: The Enterprise Choice',
    body: 'With TypeScript at its core, Angular is a robust framework designed for large-scale applications...',
    author: 'Victor Langley',
    date: '2024-05-03',
    comments: [
      { 
        id: '1', 
        text: 'Dependency injection is a lifesaver.', username: 'Sophia' 
      },
      { id: '2', 
        text: 'Steep learning curve but worth it.', username: 'Miles' 
      },
    ],
  },
  {
    id: '4',
    title: 'Svelte: The Compile-Time Gamechanger',
    body: 'Svelte takes a radical approach by shifting the work to compile-time rather than runtime...',
    author: 'Isla Monroe',
    date: '2024-05-05',
    comments: [
      { 
        id: '1', 
        text: 'No virtual DOM? Mind blown.', 
        username: 'Elias' },
      { id: '2', 
        text: 'Feels lightweight and refreshing.', username: 
        'Nina' 
      },
    ],
  },
  {
    id: '5',
    title: 'Next.js: The Future of Server-Side Rendering',
    body: 'Next.js enhances React with powerful server-side rendering and static generation...',
    author: 'Felix Hartman',
    date: '2024-05-08',
    comments: [
      { 
        id: '1', 
        text: 'Middleware support is a game-changer!', username: 'Avery' 
      },
      { id: '2', 
        text: 'I love the image optimisation feature.', username: 'Grant' 
      },
    ],
  },
]

export default posts
