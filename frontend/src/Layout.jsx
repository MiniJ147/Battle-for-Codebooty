import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/match">Match</Link>
          </li>
          <li>
            <Link to="/contact">wut</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}