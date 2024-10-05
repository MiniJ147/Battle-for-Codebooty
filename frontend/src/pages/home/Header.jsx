import React, { useState } from 'react';

import WoodBg from '../../assets/woodpattern.png'


function Header(){
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted value:', inputValue);
    };
    const handleCreateLobby = (e) => {
        e.preventDefault();
        console.log('Create Lobby');
    };

    return(
        <>
        
        <div className='w-full flex justify-center align-baseline p-20 '>
            <div style={{backgroundImage: `url(${WoodBg})`}} className='relative bg-wood3 w-2/3 flex-col justify-center items-center p-10 rounded-md border-wood2 border-8 drop-shadow-2xl'>
            

            <div className="absolute top-0 left-0 p-2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-gray-600 border-4 shadow-2xl"></div> {/* Top-Left */}
            </div>
            <div className="absolute top-0 right-0 p-2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-gray-600 border-4 shadow-2xl"></div> {/* Top-Right */}
            </div>
            <div className="absolute bottom-0 left-0 p-2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-gray-600 border-4 shadow-2xl"></div> {/* Bottom-Left */}
            </div>
            <div className="absolute bottom-0 right-0 p-2">
                <div className="w-6 h-6 bg-gray-500 rounded-full border-gray-600 border-4 shadow-2xl"></div> {/* Bottom-Right */}
            </div>


                <div className="text-center text-8xl font-PirataOne">Battle For Codebooty</div>
                    <div className='font-Montserrat'>
                        <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-1 p-4">
                            <input  type="text" 
                                    value={inputValue} 
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-10 focus:wood1 bg-gray-300 text-black"
                                    placeholder="Enter Lobby Code"
                            />
                            <button type="submit" 
                                    className="bg-wood2 text-white px-4 py-2 rounded hover:bg-wood1 focus:outline-none focus:ring-2 focus:ring-wood4 dropshadow-2xl duration-300"
                            >
                                Join   
                            </button>
                            
                        </form>
                        <form onSubmit={handleCreateLobby} className="flex items-center justify-center space-x-2">
                            <button type="submit" 
                                        className="bg-wood2 text-white px-4 py-2 rounded hover:bg-wood1 focus:outline-none focus:ring-2 focus:ring-wood4 dropshadow-2xl duration-0"
                                >
                                    Create Lobby
                            </button>
                        </form>
                    </div>
            </div>
        </div>
            
            
                   
               
            
            
        </>

    );
}
export default Header