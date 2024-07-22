import { NavLink } from "react-router-dom"



const Navbar = () => {
  return (
    <head className="header">
        <NavLink to="/" className="w-20 h-20 rounded-lg items-center justify-center flex font-bold shadow-md">
            <p>WM</p>

        </NavLink>
        <nav className="flex flex-row-reverse text-lg gap-8 font-medium">
           <NavLink to="/About" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> About </NavLink>
           <NavLink to="/Projects" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> Projects </NavLink>
           <NavLink to="/Contact" className={({isActive}) => isActive? 'text-cream-500':'text-green-500' }> Contacts </NavLink> 
        </nav>

    </head>
  )
}

export default Navbar