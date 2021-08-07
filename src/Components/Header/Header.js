import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav>
            <NavLink to="/" activeClassName ="active_nav_link" className="nav_link">Home</NavLink>
            <NavLink to="/Blog" activeClassName ="active_nav_link" className="nav_link">Blog</NavLink>
        </nav>
    )    
}

export default Header