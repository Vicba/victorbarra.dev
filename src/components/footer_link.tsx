import { ReactElement } from "react"

type FooterLinkProps = {
    title: string,
    link: string,
    icon: ReactElement
}

export default function Footer_link({ title, link, icon } : FooterLinkProps) {
    return (
        <a href={link} target="_blank" className='flex items-center justify-center flex-col gap-1 font-thin text-sm'>
            {icon}
            {title}
        </a>
    )
}
