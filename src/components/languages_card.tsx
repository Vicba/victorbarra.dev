import Typescript from '../assets/images/typescript.png'
import ReactIcon from '../assets/images/react.png'
import Nodejs from '../assets/images/node.png'
import Python from '../assets/images/python.png'
import Tailwind from '../assets/images/tailwind.png'
import Nextjs from '../assets/images/nextjs.png'


export default function Languages_card() {
    return (
        <ul className='flex flex-col items-center justify-center space-y-3'>
            <li className='flex flex-row'>React <img src={ReactIcon} alt="react" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Nextjs <img src={Nextjs} alt="Nextjs" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Nodejs <img src={Nodejs} alt="nodejs" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Python <img src={Python} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Typescript <img src={Typescript} alt="Typescript" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Tailwindcss <img src={Tailwind} alt="Tailwindcss" className='h-5 ml-2' /></li>
        </ul>
    )
}
