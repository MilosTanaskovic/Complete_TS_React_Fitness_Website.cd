import React from 'react'

type HomeImageProps = {
    image: string;
    alt: string;
    className?: string;
}

const HeroImage: React.FC<HomeImageProps> = ({image, alt, className}) => {
    return (
        <img 
            src={image} 
            alt={alt} 
            className={className}
        />  
    )
}

export default HeroImage;
