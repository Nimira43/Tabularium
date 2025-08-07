import { Post } from '@/types/posts'

const posts: Post[] = [
  {
    id: '1',
    title: 'React: The Declarative Revolution',
    body: 'React introduced a paradigm shift in UI development with its component-based architecture...',
    author: 'Eddie Sterling',
    date: '2025-06-23',
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
    date: '2025-04-28',
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
    date: '2025-03-03',
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
    date: '2025-05-05',
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
    date: '2025-07-08',
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
  {
    id: '6',
    title: 'Django: The Pythonic Pillar of Web Craft',
    body: 'Django\’s batteries-included philosophy empowers developers to build secure, scalable apps with minimal fuss. From ORM magic to admin interface sorcery, it\’s a framework that feels like a spellbook.',
    author: 'Selene Voss',
    date: '2025-05-12',
    comments: [
      { id: '1', text: 'The built-in admin is such a time-saver.', username: 'Theo' },
      { id: '2', text: 'Django Rest Framework is my go-to for APIs.', username: 'Rhea' },
    ],
  },
  {
    id: '7',
    title: 'NestJS: Architecting APIs with TypeScript Precision',
    body: 'NestJS blends OOP, FP, and FRP into a modular powerhouse for building scalable server-side apps. With decorators, DI, and a CLI that feels like a commander\'s toolkit, it\’s a TypeScript fortress.',
    author: 'Cassian Rhodes',
    date: '2025-04-18',
    comments: [
      { id: '1', text: 'The module system is so clean and intuitive.', username: 'Juno' },
      { id: '2', text: 'I love how it integrates with GraphQL and WebSockets.', username: 'Orion' },
    ],
  },
  {
    id: '8',
    title: 'Laravel: Elegance in PHP’s Renaissance',
    body: 'Laravel turns PHP into poetry. With expressive syntax, artisan commands, and Eloquent ORM, it’s a framework that invites you to build with grace and speed—no boilerplate, just brilliance.',
    author: 'Lyra Fontaine',
    date: '2025-07-25',
    comments: [
      { id: '1', text: 'Blade templating is so satisfying to use.', username: 'Nova' },
      { id: '2', text: 'Laravel Forge made deployment a breeze.', username: 'Kai' },
    ],
  }
]

export default posts
