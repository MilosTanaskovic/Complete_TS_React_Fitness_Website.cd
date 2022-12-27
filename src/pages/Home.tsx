
import React from 'react';

import { motion } from 'framer-motion';

import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';

import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { HomeContent, HomeCTA } from '@/components';


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
                className="mx-auto w-5/6 items-center justify-center mb:flex md:h-5/6"
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
                <div>
                  
                </div>
            </motion.div>

            {/** SPONSORS */}
            <div>

            </div>
        </section>
    )
}

export default Home
