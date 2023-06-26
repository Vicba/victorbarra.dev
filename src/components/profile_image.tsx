import Victor from '../assets/images/Victor.jpeg'

import {motion} from "framer-motion"

export default function Profile_image() {
    return (
        <>
            <img src={Victor} alt="Picture of Victor" className='rounded-full h-32 md:h-72' />

        </>
    )
}
