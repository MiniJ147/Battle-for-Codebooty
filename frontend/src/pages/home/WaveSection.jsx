import React from 'react';
import Wave from 'react-wavify';


const WaveSection = () => {
    return (
        <div className='relative'>
            <div className="" style={{ backgroundColor: '#313244'}}>
                <Wave 
                    className=''
                    fill = '#181825'
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