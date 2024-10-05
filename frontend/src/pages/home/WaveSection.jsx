import React from 'react';
import Wave from 'react-wavify';


const WaveSection = () => {
    return (
        <div className="" style={{ backgroundColor: '#BAD5E1'}}>
            <Wave 
                className=''
                fill = '#8CBDD6'
                paused={false}
                options={{
                    height: 80,
                    amplitude: 30,
                    speed: 0.2,
                    points: 5,
                }}
            />
        </div>
        
    );
  };

export default WaveSection;