import React from 'react';
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid';

import Logo from "@/assets/Logo.png";
import { Link } from '.';
import { SelectedPage } from '@/shared/types';

type NavBarProps = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const links = ['Home', 'Benefits', 'Our Classes', 'Contact Us'];

const NavBar: React.FC<NavBarProps> = ({selectedPage, setSelectedPage}) => {

    const flexBetween = "flex items-center justify-between";
    return (
        <nav className="">
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT SIDE */}
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
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
