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
        <div className='absolute w-full h-10 bg-soft-blue-start bottom-0'></div>
      </div>
      <div className='min-h-screen bg-soft-blue-start'>
          <h1 className='text-center py-10 text-4xl'>How to Play</h1>

          <div className='w-full text-center pb-12 text-xl flex justify-center'>
            <p className='max-w-6xl'>This is our game! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat blanditiis ab dicta distinctio praesentium, sed non nam sequi. Soluta optio harum consectetur et unde a expedita, minima adipisci veniam doloremque!</p>
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

          <div>
            <h1 className='text-center pt-10 text-3xl'>Actions</h1>
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
