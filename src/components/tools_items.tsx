import React from 'react'


import Github from '../assets/images/github.png'
import Figma from '../assets/images/figma.png'
import AWS from '../assets/images/aws.png'
import Firebase from '../assets/images/firebase.png'
import MySQL from '../assets/images/mysql.png'
import MongoDB from '../assets/images/mongoDB.png'
import Linux from '../assets/images/linux.png'



export default function Tools_items() {
    return (
        <ul className='flex flex-col items-center justify-center space-y-3'>
            <li className='flex flex-row'>GitHub/GitLab <img src={Github} alt="github" className='h-5 ml-2' /></li>
            <li className='flex flex-row'>Figma <img src={Figma} alt="nodejs" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>AWS S3, CloudFront <img src={AWS} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Firebase <img src={Firebase} alt="react" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>MySQL <img src={MySQL} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>MongoDB <img src={MongoDB} alt="python" className='h-6 ml-2' /></li>
            <li className='flex flex-row'>Linux <img src={Linux} alt="javascript" className='h-5 ml-2' /></li>
        </ul>
    )
}
