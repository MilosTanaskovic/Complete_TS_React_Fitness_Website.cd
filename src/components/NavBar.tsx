import React, {useState} from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

import Logo from "@/assets/Logo.png";
import { Link } from '.';
import { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from './ActionButton';

type NavBarProps = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const links = ['Home', 'Benefits', 'Our Classes', 'Contact Us'];

const NavBar: React.FC<NavBarProps> = ({selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    
    return (
        <nav className="">
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    {links?.map((link) => (
                                        <Link 
                                            key={link}
                                            page={link}
                                            selectedPage={selectedPage}
                                            setSelectedPage={setSelectedPage}
                                        />
                                    ))}
                                <p>Home</p>
                                <p>Benefites</p>
                                <p>Our Classes</p>
                                <p>Contact Us</p>  
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}
                                    >
                                        Become a member
                                    </ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
