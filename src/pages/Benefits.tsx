import React from 'react'
import { motion } from 'framer-motion'
import { BenefitType, SelectedPage } from '@/shared/types'
import { Benefit, Body, HeadingLarge } from '@/components'
import { benefits } from '@/data/content'

type BenefitsProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: 0.2},
    }
}
const Benefits: React.FC<BenefitsProps> = ({setSelectedPage}) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.BENEFITS)}
            >
                {/** HEADER */}
                <motion.div
                    className="md:my5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    transition={{ duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <HeadingLarge>MORE THEN JUST GYM.</HeadingLarge> 
                    <Body className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </Body>
                </motion.div>

                {/** BENEFITS */}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits?.map((benefit:BenefitType) => (
                        <Benefit 
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            desc={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Benefits
