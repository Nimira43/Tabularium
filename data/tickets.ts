import { Ticket } from '@/types/tickets'

const tickets: Ticket[] = [
  {
    id: '1',
    title: 'Nimira Tech Learning Hub',
    body: 'Issues with courses, account lockout etc',
    author: 'Raj Johal',
    // date: '2024-05-01',
    comments: [
      { id: '1', text: 'Courses not showing as completed', username: 'Jang' },
      {
        id: '2',
        text: 'Locked out of account. Too many wrong password guesses',
        username: 'Adam',
      },
    ],
  },
  {
    id: '2',
    title: 'Skorpion IDS',
    body: 'All issues regarding problems with Skorpion',
    author: 'Tim Jung',
    // date: '2024-04-28',
    comments: [
      { id: '1', text: 'Skorpion keeping block my emails', username: 'Gerhard' },
      {
        id: '2',
        text: 'Tim, I am stilling having too many false negatives!!!',
        username: 'Sarah',
      },
    ],
  },
  {
    id: '3',
    title: 'Abacas',
    body: 'Payroll',
    author: 'Gemma Rutherford',
    // date: '2024-05-03',
    comments: [
      { id: '1', text: 'I am missing 4 hours overtime', username: 'Saeed' },
      {
        id: '2',
        text: 'Why is my tax code still wrong?',
        username: 'Eric',
      },
    ],
  },
  {
    id: '4',
    title: 'Atlas Companion',
    body: 'All issues with remote access and control of Atlas',
    author: 'Tariq',
    // date: '2024-05-05',
    comments: [
      { id: '1', text: 'Thanks for software update. Issue sorted', username: 'Dave' },
      {
        id: '2',
        text: 'I have lost my Atlas card! Again! Sooo sorry!',
        username: 'Karen',
      },
    ],
  },
  {
    id: '5',
    title: 'Microsoft Office',
    body: 'Report any issues or help request with Office here.',
    author: 'Meena Gupal',
    // date: '2024-05-08',
    comments: [
      {
        id: '1',
        text: 'How do I add two numbers together?',
        username: 'Bob',
      },
      {
        id: '2',
        text: 'I have issues with transferring information into a CV file.',
        username: 'Kelly',
      },
    ],
  },
  {
    id: '6',
    title: 'Microservices',
    body: 'Issues relating to small dedicated services.',
    author: 'Nick Rabone',
    // date: '2024-05-10',
    comments: [
      {
        id: '1',
        text: 'Kroton keep losing access to the database service.',
        username: 'Phil',
      },
      {
        id: '2',
        text: 'Will that patch be ready soon. Still getting auth issues.',
        username: 'Amanda',
      },
    ],
  },
  {
    id: '7',
    title: 'Cybersecurity in the Digital Age',
    body: 'As technology advances, cybersecurity becomes...',
    author: 'Michael Johnson',
    // date: '2024-05-12',
    comments: [
      {
        id: '1',
        text: 'Cybersecurity is crucial for protecting data.',
        username: 'Ava',
      },
      { id: '2', text: 'Continuous monitoring is key.', username: 'Noah' },
    ],
  },
  {
    id: '8',
    title: 'Artificial Neural Networks: Mimicking the Brain',
    body: 'Artificial Neural Networks (ANNs) are inspired by the...',
    author: 'Isabella White',
    // date: '2024-05-15',
    comments: [
      {
        id: '1',
        text: 'ANNs have applications in various fields.',
        username: 'Liam',
      },
      {
        id: '2',
        text: 'Training them requires a lot of data.',
        username: 'Mia',
      },
    ],
  },
  {
    id: '9',
    title: 'Cloud Computing: Enabling Scalable Solutions',
    body: 'Cloud computing provides on-demand access to computing...',
    author: 'James Taylor',
    // date: '2024-05-18',
    comments: [
      {
        id: '1',
        text: 'Cloud computing has transformed IT.',
        username: 'Harper',
      },
      {
        id: '2',
        text: 'Concerned about data privacy in the cloud.',
        username: 'Logan',
      },
    ],
  },
  {
    id: '10',
    title: 'Machine Learning: Powering Intelligent Systems',
    body: 'Machine Learning (ML) algorithms enable computers...',
    author: 'Ava Johnson',
    // date: '2024-05-20',
    comments: [
      { id: '1', text: 'ML is reshaping industries.', username: 'Emma' },
      {
        id: '2',
        text: 'I am interested in reinforcement learning.',
        username: 'Daniel',
      },
    ],
  },

]

export default tickets