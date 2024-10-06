import Header from './Header.jsx'
import Wave from './WaveSection.jsx'
import Sign from './Sign.jsx'
import ActionCard from './ActionCard.jsx'

import cannonImg from '../../assets/actionCannon.jpg'
import raidImg from '../../assets/actionRaid.jpg'
import spyglassImg from '../../assets/actionSpyglass.jpg'


export const Home = () => {
  return (
    <>
      <Sign/>
      <div  className="bg-gradient-to-b from-soft-blue-start via-soft-blue-middle to-soft-blue-end min-h-96">
        
        <Header/>
        
      </div>

      <Wave/>

      <div className='relative w-full'>
        <div className='absolute w-full h-10 bg-wave-blue bottom-0'></div>
      </div>
      <div className='min-h-screen bg-wave-blue'>
          <h1 className='text-center py-10 text-4xl'>How to Play</h1>

          <div className='min-w-4 text-center'>
            <p>This is our game! this is how it works! we have alot of cool features! there are 3 power ups! Raid! Cannon! Spyglass!</p>
          </div>

          <div className='flex gap-8 text-center justify-center'>
            <div >
              <h>create</h>
              <p>this is how you create a lobby</p>
            </div>
            
            <div>
              <h>join</h>
              <p>this is how you join a lobby</p>
            </div>
          </div>

          <div className='flex row gap-8 justify-center'>
            <ActionCard title="Cannon" img={cannonImg} desc="this is what the cannon action does"/>
            <ActionCard title="Raid" img={raidImg} desc="this is what the raid action does"/>
            <ActionCard title="Spyglass" img={spyglassImg} desc="this is what the spyglass action does"/>
            
          </div>

          <h1 className='text-center py-10 text-4xl'>About us</h1>





      </div>
    </>
  );
}
