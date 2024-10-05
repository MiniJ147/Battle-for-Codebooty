import React, { useState } from 'react';
import WoodBg from '../../assets/woodpattern.png';
import chain from '../../assets/chain.svg';

const Sign = () => {
    const [isHovered, setIsHovered] = useState(false);
    
    const handleHover = () => {
        setIsHovered(!isHovered);
    };
    
    

    return (
        <>
            <div className='absolute z-50 top-36 right-10'>
                <img src={chain} alt="Chain" className="absolute top- z-10 w-20 h-20 flex justify-center align-baseline bottom-20 left-12" />
            
                <div 
                    style={{ 
                        backgroundImage: `url(${WoodBg})`,
                        transform: isHovered ? 'rotate(-3deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                    className="w-44 h-20 flex justify-center items-center font-Montserrat border-wood2 border-8 rounded-md shadow-md"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                >
                    <button className="p-2 bg-wood1 rounded-md font-">Verify Leetcode</button>
                </div>
            </div>
        </>
    );
};

export default Sign;
