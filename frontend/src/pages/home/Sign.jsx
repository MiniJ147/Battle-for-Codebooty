import React, { useEffect, useState } from 'react';
import WoodBg from '../../assets/woodpattern.png';
import chain from '../../assets/chain.svg';
import axios from 'axios';
import Cookies from 'js-cookie';

const Sign = () => {
    
    const [isSignedIn, setIsSignedIn] = useState(false);

    

    useEffect(()=>{
        setIsSignedIn(Cookies.get("LEETCODE_SESSION") && Cookies.get("CSRF_TOKEN"));
    },[])

    const handleClick = async () => {
        try {
            if(isSignedIn){
                Cookies.remove("LEETCODE_SESSION");
                Cookies.remove("CSRF_TOKEN");
                location.href="/";
                return;
            }

            const res = await axios.get("http://localhost:3002/api/verify/link");
            const data = res.data;
            
            location.href=data.redirect;
        } catch (e) {
            alert("failed to fetch verify link, check console for more information");
            console.log(e);
        }
    }


    return (
        <>
            <div className='absolute z-50 top-16 right-10 transition-transform duration-1000 ease-in-out transform hover:translate-y-6'>
                <img src={chain} alt="Chain" className="absolute z-50 w-32 h-32 flex justify-center align-baseline left-6 " style={{bottom: '71px'}} />

                <div
                    style={{
                        backgroundImage: `url(${WoodBg})`,
                    }}
                    className="w-44 h-20 flex justify-center items-center font-Montserrat border-wood2 border-8 rounded-md shadow-md"
                    >
                    <div className="relative group">
                        <button className="p-2 bg-soft-blue-end rounded-md hover:bg-soft-blue-start duration-1000" onClick={handleClick}>{isSignedIn ? <p>Logout</p> : <p>Sign in</p>}</button>
                       
                    </div>
                    
                </div>
            </div>
            
            
        </>
    );
};

export default Sign;
