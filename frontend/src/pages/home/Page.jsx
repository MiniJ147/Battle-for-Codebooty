import Header from './Header.jsx'
import Wave from './WaveSection.jsx'


export const Home = () => {
  return (
    <>
      <div  className="bg-gradient-to-b from-soft-blue-start via-soft-blue-middle to-soft-blue-end min-h-96">
        <Header/>
      </div>
      <Wave/>
      <div className='relative w-full'>
        <div className='absolute w-full h-10 bg-wave-blue bottom-0'>
        </div>
      </div>
      <div className='min-h-screen bg-wave-blue'>
          <h1 className='text-center py-10'>About Us</h1>
      </div>
    </>
  );
}
