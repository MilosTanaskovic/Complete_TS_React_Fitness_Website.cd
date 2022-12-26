import { motion } from 'framer-motion'
import React from 'react'

type HomeContentProps = {
    HomePageText: string;
}

const HomeContent: React.FC<HomeContentProps> = ({HomePageText}) => {
    return (
        <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{ duration: 0.5 }}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
        >
            <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                    <img src={HomePageText} alt="home page text" />
                </div>
            </div>

            <p className="mt-8 text-sm">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
        </motion.div>
    )
}

export default HomeContent;
