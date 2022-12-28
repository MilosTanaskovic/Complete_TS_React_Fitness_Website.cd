import { BenefitType, SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion';
import React from 'react'
import { Body, HeadingSmall, LinkRM } from '.';

type BenefitProps = {
    icon: JSX.Element;
    title: string;
    desc: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const childVariant = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {opacity: 1, scale: 1},
}

const Benefit: React.FC<BenefitProps> = ({icon, title, desc, setSelectedPage}) => {
    
    return (
        <motion.div
            className="mt-5 rounded-md border-2 border-gray-100 px-16 py-16 text-center"
            variants={childVariant}
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-500 bg-primary-100 p-4">
                    {icon}
                </div>
            </div>

            <HeadingSmall>{title}</HeadingSmall>
            <Body className="my-3">{desc}</Body>

            <LinkRM
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.CONTACTUS)}
                href={`#${SelectedPage.CONTACTUS}`}
            >
                Learn More
            </LinkRM>
        </motion.div>
    )
}

export default Benefit
