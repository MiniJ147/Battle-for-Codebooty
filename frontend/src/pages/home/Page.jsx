import Header from './Header.jsx'
import WaveSection from './WaveSection.jsx'
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
     
    <WaveSection color="#181825" className='absolute bottom-0 h-20 z-0' />

      <div className='relative w-full'>
        <div className='absolute w-full h-10 bg-soft-blue-start bottom-0'></div>
      </div>
      <div className='min-h-screen bg-soft-blue-start'>
          <h1 className='text-center py-10 text-4xl'>How to Play</h1>

          <div className='w-full text-center pb-12 text-xl flex justify-center'>
            <p className='max-w-6xl'>Welcome to Battle for Codebooty! The tool that makes LeetCode fun! To start playing, either create or join a lobby. Each 15 minute round consits of 1 leetcode question with all players having the same problem. But there is a catch! Each player can use 3 unique abilities that can be used to attack your enemies.  </p>
          </div>

          <div className='flex gap-8 text-center justify-center'>
            <div >
              <h className="bg-soft-blue-end text-white px-4 py-2 rounded dropshadow-2xl duration-1000 text-xl font-Montserrat cursor-default ">Create</h>
              <div className='pt-4 text-lg'>
                <p >Create a lobby for your friends.</p>
              </div>
              
            </div>
            
            <div>
              <h className="bg-soft-blue-end text-white px-4 py-2 rounded dropshadow-2xl duration-1000 text-xl font-Montserrat cursor-default ">Join</h>
              <div className='pt-4 text-lg'>
                <p>Input the lobby code to join the match.</p>
              </div>
              
              
            </div>
          </div>

          <div>
            <h1 className='text-center pt-10 text-3xl'>Actions</h1>
            
          </div>

          <div className='flex row gap-8 justify-center'>
            <ActionCard title="Cannon" img={cannonImg} desc="Fire a destructive cannonball to destroy part of your enemy's code!"/>
            <ActionCard title="Raid" img={raidImg} desc="Raid your target's ship and steal their code!"/>
            <ActionCard title="Spyglass" img={spyglassImg} desc="Take a peek at your foe's code without them knowing!"/>
            
          </div>

          <h1 className='text-center pt-10 text-4xl'>About us</h1>
          <div className='text-xl w-full flex justify-center items-center pt-4 pb-24'>
            <p className='w-2/3'>We are so cool and smart and cool and we built this cool program where you can battle your friends. LeetCode made more fun! We are a team of software developers who are looking for money. pls give us money we want internship. pls pls pls we are broke and need money. We are such a great team and everybody is treated kindly and respectfully. In this project jake did the backend, Angelo did the frontend for the home page, samarth did the ide and the match page, and arjun did the algorithms.</p>
          </div>





      </div>
    </>
  );
}
