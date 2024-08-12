import Typescript from '../assets/images/typescript.png'
import Python from '../assets/images/python.png'
import Tailwind from '../assets/images/tailwind.png'
import Nextjs from '../assets/images/nextjs.png'
import Pytorch from '../assets/images/pytorch.png'
import TensorFlow from '../assets/images/tf.png'
import Scikit from '../assets/images/scikit-learn.png'


export default function Languages_card() {
    return (
        <ul className='flex flex-col items-center justify-center space-y-3'>
            <li className='flex flex-row'>Nextjs <img src={Nextjs} alt="Nextjs" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Python <img src={Python} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Typescript <img src={Typescript} alt="Typescript" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Tailwindcss <img src={Tailwind} alt="Tailwindcss" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Scikit-learn <img src={Scikit} alt="Scikit-learn" className='h-4 ml-2' /></li>
            <li className='flex flex-row'>TensorFlow <img src={TensorFlow} alt="Tensorflow" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>PyTorch <img src={Pytorch} alt="pytorch" className='h-6 ml-2' /></li>
        </ul>
    )
}
