
import React from 'react';

import { motion } from 'framer-motion';

import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";

import { HeroImage, HomeContent, HomeCTA, Sponsors } from '@/components';


type HomeProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home: React.FC<HomeProps> = ({setSelectedPage}) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full mb:pb-0"
        >
            {/** IMAGE AND MAIN HEADER */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.HOME)}
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            >
                {/** MAIN HEADER */}
                <div className="z-10 mt-32 mb:basis-3/5">
                    {/** HEADINGS */}
                    <HomeContent  
                        HomePageText={HomePageText}
                    />

                    {/** ACTIONS */}
                    <HomeCTA setSelectedPage={setSelectedPage} />
                </div>
                {/** IMAGE */}
                <div className="flex basis-3/5 justify-center 
                        md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
            
                >
                    <HeroImage 
                        image={HomePageGraphic} 
                        alt="evolutionary fitness" 
                    />
                </div>
            </motion.div>

            {/** SPONSORS */}
            {isAboveMediumScreens && (
                <Sponsors />
            )}
        </section>
    )
}

export default Home
