import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/" ml={4}>Home</Link>
        <Link to="/match/asdf/play" ml={4}>Match</Link>
        <Link to="/match/asdf/score" ml={4}>Score</Link>
        <Link to="/contact" ml={4}>wut</Link>
      </nav>

      <Outlet/>

      <div className='w-full flex justify-center bg-crust p-4'>
        <footer>
          <a href="https://github.com/MiniJ147/Battle-for-Codebooty" className='text-center'>
            https://github.com/MiniJ147/Battle-for-Codebooty
          </a>
        </footer>
      </div>
    </>
  )
}