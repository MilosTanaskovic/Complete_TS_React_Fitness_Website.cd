import React from 'react'

import AnchorLink from 'react-anchor-link-smooth-scroll'

import { SelectedPage } from '@/shared/types'

type LinkRMProps = {
    children: React.ReactNode;
    className?: string;
    href: string;
    onClick: (value: SelectedPage | any) => void;
    
}

const LinkRM: React.FC<LinkRMProps> = ({children, className, href, onClick}) => {
    return (
        <AnchorLink
            className={className}
            onClick={onClick}
            href={href}
        >
            <p>
                {children}
            </p>
        </AnchorLink>
    )
}

export default LinkRM
