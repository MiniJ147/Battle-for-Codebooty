import Header from './Header.jsx'
import Wave from './WaveSection.jsx'


export const Home = () => {
  return (
    <>
      <div  className="bg-gradient-to-b from-soft-blue-start via-soft-blue-middle to-soft-blue-end min-h-96">
        <Header/>
      </div>
      <div className='min-h-screen bg-wave-blue  m-0 p-0'>
        <Wave/>
      </div>
    </>
  );
}
