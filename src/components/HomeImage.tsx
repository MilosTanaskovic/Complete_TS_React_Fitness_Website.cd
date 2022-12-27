import React from 'react'

type HomeImageProps = {
    image?: string;
}

const HomeImage: React.FC<HomeImageProps> = ({image}) => {
    return (
        <div 
            className="flex basis-3/5 justify-center 
                        md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
            
        >
            <img src={image} alt="home page graphic" />
        </div>
    )
}

export default HomeImage
