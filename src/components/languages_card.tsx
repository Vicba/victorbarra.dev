import React from 'react'

import Java from '../assets/images/java.png'
import ReactIcon from '../assets/images/react.png'
import Nodejs from '../assets/images/node.png'
import Python from '../assets/images/python.png'
import Javascript from '../assets/images/js.png'
import Tailwind from '../assets/images/tailwind.png'



export default function Languages_card() {
    return (
        <ul className='flex flex-col items-center justify-center space-y-3'>
            <li className='flex flex-row'>Java <img src={Java} alt="java" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>React <img src={ReactIcon} alt="react" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Nodejs <img src={Nodejs} alt="nodejs" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Python <img src={Python} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Javascript <img src={Javascript} alt="javascript" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Tailwindcss <img src={Tailwind} alt="javascript" className='h-5 ml-2' /></li>
        </ul>
    )
}
