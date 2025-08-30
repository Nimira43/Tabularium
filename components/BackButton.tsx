import { BsArrowLeftCircle } from 'react-icons/bs'
import Link from 'next/link'

interface BackButtonProps {
  text: string
  link: string
}

const Backbutton = ({ text, link }: BackButtonProps) => {
  return ( 
    <Link href={link} className='text-dark hover:underline flex items-center gap-1 font-medium mb-5'>
      <BsArrowLeftCircle size={18} /> {text}
    </Link>
  )
}
 
export default Backbutton