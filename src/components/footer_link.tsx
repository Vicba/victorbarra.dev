import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FooterLinkProps = {
    title: string,
    link: string,
    icon: any
}

export default function Footer_link({ title, link, icon } : FooterLinkProps) {
    return (
        <a href={link} className='flex items-center justify-center flex-col gap-1 font-thin text-sm'>
            <FontAwesomeIcon icon={icon} className='h-9' />
            {title}
        </a>
    )
}
