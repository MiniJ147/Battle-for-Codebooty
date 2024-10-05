import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/" ml={4}>Home</Link>
        <Link to="/match" ml={4}>Match</Link>
        <Link to="/score" ml={4}>Score</Link>
        <Link to="/contact" ml={4}>wut</Link>
      </nav>

      <Outlet/>
    </>
  )
}