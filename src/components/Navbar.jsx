import { Link } from "react-router-dom"

import "./Navbar.css"

const Navbar = () => {
  return (
   <nav className="navbar">
    <h1><Link to={`/`}>Blog</Link></h1>
    <ul>
        <li>
            <Link to={`/`}>Home</Link>
        </li>
        <li>
            <Link to={`/new`} className="new-btn">Novo Post</Link>
        </li>
    </ul>
   </nav>
  )
}

export default Navbar