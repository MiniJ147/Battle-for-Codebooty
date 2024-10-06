import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

import WoodBg from '../../assets/woodpattern.png'
import Wheel from'../../assets/wheel.png'


function Header(){
    const [inputValue, setInputValue] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(()=>{
        setIsSignedIn(Cookies.get("LEETCODE_SESSION") && Cookies.get("CSRF_TOKEN"));
    },[Cookies.get("LEETCODE_SESSION",Cookies.get("CSRF_TOKEN"))])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isSignedIn){
            alert("please sign in before continuing");
            return;
        }

        console.log('Submitted value:', inputValue);
    };
    const handleCreateLobby = (e) => {
        e.preventDefault();
        if(!isSignedIn){
            alert("please sign in before continuing");
            return;
        }

        console.log('Create Lobby');
    };

    return(
        <>
        
        <div className='w-full flex justify-center align-baseline p-44 pb-20'>
            <div className='relative justify-center align-baseline flex w-full '>

           
            <img src={Wheel}  style={{ top:'-133px' }} className='w-64 h-64 absolute  transition-transform duration-1000 ease-in-out transform hover:rotate-360'/>

            <div style={{backgroundImage: `url(${WoodBg})`}} className='relative bg-wood3 w-2/3 flex-col justify-center items-center p-10 rounded-md border-wood2 border-8 drop-shadow-2xl flex '>
                 

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
            
                    <div className="text-center text-8xl font-PirataOne text-crust">Battle For Codebooty</div>

                    <div className='font-Montserrat'>
                        <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-1 p-4">
                            <input  type="text" 
                                    value={inputValue} 
                                    onChange={(e) => setInputValue(e.target.value)}
                                    className=" rounded px-3 py-2 focus:outline-none focus:ring-10 focus:wood1 bg-overlay-0 text-white"
                                    placeholder="Enter Lobby Code"
                            />
                            <div className="relative group">
                                <button type="submit" className="bg-soft-blue-end text-white px-4 py-2 rounded hover:bg-soft-blue-middle  dropshadow-2xl duration-1000">Join</button>
                            
                            </div>
                        
                        </form>
                        <form onSubmit={handleCreateLobby} className="flex items-center justify-center space-x-2">
                            <div className="relative group">
                                <button type="submit" className="bg-soft-blue-end text-white px-4 py-2 rounded hover:bg-soft-blue-middle focus:outline-none focus:ring-2 focus:ring-wood4 dropshadow-2xl duration-1000">Create Lobby</button>
                                
                            </div>
                            
                        </form>
                    </div>
                    </div>
            </div>
            
        </div>
            
            
                   
               
            
            
        </>

    );
}
export default Header