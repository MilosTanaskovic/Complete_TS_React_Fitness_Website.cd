import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { SelectedPage } from '@/shared/types';


type ActionButtonProps = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({children, setSelectedPage}) => {
    return (
        <AnchorLink
            className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:bg-primar"
            onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
            href={`#${SelectedPage.CONTACTUS}`}
        >
            {children}
        </AnchorLink>
    )
}

export default ActionButton
