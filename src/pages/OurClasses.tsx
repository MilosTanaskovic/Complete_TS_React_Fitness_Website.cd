import React from 'react';

import { motion } from 'framer-motion';

import { ClassType, SelectedPage } from '@/shared/types';
import { Body, Class, HeadingLarge } from '@/components';
import { classes } from '@/data/content';


type OurClassesProps = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses: React.FC<OurClassesProps> = ({setSelectedPage}) => {
    return (
        <section 
            id="ourclasses"
            className="w-full bg-primary-100 py-40"
        >
            {/** TITLE & DESCRIPTION */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OURCLASSES)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <div className="md:w-3/5">
                        <HeadingLarge>OUR CLASSES</HeadingLarge>
                        <Body className="py-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </Body>
                    </div>
                </motion.div>
            </motion.div>

            {/** IMG CAROUSEL */}
            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes?.map((item: ClassType, index) => (
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default OurClasses
