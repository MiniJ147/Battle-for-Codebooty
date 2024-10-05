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
            <div className='absolute z-50 top-36 right-10'>
                <img src={chain} alt="Chain" className="absolute top- z-10 w-20 h-20 flex justify-center align-baseline bottom-20 left-12" />

                <div
                    style={{
                        backgroundImage: `url(${WoodBg})`,
                    }}
                    className="w-44 h-20 flex justify-center items-center font-Montserrat border-wood2 border-8 rounded-md shadow-md"
                    >
                    <div className="relative group">
                        <button className="p-2 bg-wood2 rounded-md hover:bg-wood1" onClick={handleClick}>{isSignedIn ? <p>Logout</p> : <p>Sign in</p>}</button>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-wood4 transition-all group-hover:w-full rounded-lg"></span>
                    </div>
                    
                </div>
            </div>
            
            
        </>
    );
};

export default Sign;
