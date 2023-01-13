import React from 'react'
import { Body } from '.'

type ClassProps = {
    name: string;
    description?: string;
    image: string;
}

const Class: React.FC<ClassProps> = ({name, description, image}) => {
    return (
        <li className="relative mx-5 inline-block h-[380px] w-[450px]">
            <div className="p-5 absolute z-30 flex h-[380px] w-[450px] flex-col 
                            items-center justify-center whitespace-normal bg-primary-500 text-center text-white 
                            opacity-0 transition duration-500 hover:opacity-90">
                <Body className="text-2xl">{name}</Body>
                <Body className="mt-5">{description}</Body>
            </div>
            <img src={image} alt={name} />
        </li>
    )
}

export default Class
