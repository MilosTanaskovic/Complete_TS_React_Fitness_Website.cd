import React from 'react';

import { motion } from 'framer-motion';

import { SelectedPage } from '@/shared/types'
import { Body, ContactForm, HeadingLarge, HeroImage } from '@/components';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'

type ContactUsProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const ContactUs: React.FC<ContactUsProps> = ({setSelectedPage}) => {
    return (
        <section
            id="contactus"
            className="mx-auto w-5/6 pt-24 pb-32"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.CONTACTUS)}
            >
                {/** HEADER */}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0 }
                    }}
                >
                    <HeadingLarge>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HeadingLarge>
                    <Body className="my-5">
                        Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
                    </Body>
                </motion.div>
                {/** FORM & IMG */}
                <div className="mt-10 justify-between gap-8 md:flex">
                    <motion.div
                        className="mt-10 basis-3/5 md:flex"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <ContactForm />
                    </motion.div>
                    <motion.div
                        className="relative mt-16 basis-2/5 md:mt-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                            <HeroImage 
                                image={ContactUsPageGraphic}
                                alt="ContactUsPageGraphic"
                                className="w-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs
