import React from 'react';
import Wave from 'react-wavify';


const WaveSection = () => {
    return (
        <div className='relative'>
            <div className="" style={{ backgroundColor: '#BAD5E1'}}>
                <Wave 
                    className=''
                    fill = '#8CBDD6'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 30,
                        speed: 0.2,
                        points: 5,
                    }}
                />
            </div>
            

           
        </div>
        
        
    );
  };

export default WaveSection;