import React from 'react'

import { motion } from 'framer-motion'
import { ActionButton } from '@/components';
import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type HomeCTAProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const HomeCTA: React.FC<HomeCTAProps> = ({setSelectedPage}) => {

    return (
        <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
            }}
        >
            <ActionButton
                setSelectedPage={setSelectedPage}
            >
                Join Now
            </ActionButton>
            <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 hover:cursor-pointer"
                onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
                href={`#${SelectedPage.CONTACTUS}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    )
}

export default HomeCTA
