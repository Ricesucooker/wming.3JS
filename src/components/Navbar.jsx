import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <head className="header">
        <NavLink to="/" className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
            <p className="green-gradient_text">TOP</p>
        </NavLink>
        <nav className="flex text-lg gap-8 font-medium">
           <NavLink to="/About" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> About </NavLink>
           <NavLink to="/Projects" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> Projects </NavLink>
           <NavLink to="/Contact" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> Contacts </NavLink> 
        </nav>

    </head>
  )
}

export default Navbar