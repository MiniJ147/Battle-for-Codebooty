import React, { useState } from 'react';




function Header(){
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted value:', inputValue);
    };

    return(
        <>
            <div className="text-center text-5xl font-PirataOne">Battle For Codebooty</div>

            <form onSubmit={handleSubmit} className="flex items-center justify-center space-x-2">
                <input  type="text" 
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter Lobby Code"
                />
                <button type="submit" 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit       
                </button>
            
            </form>
            
                   
               
            
            
        </>

    );
}

export default Header;