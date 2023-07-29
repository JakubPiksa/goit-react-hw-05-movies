import { NavLink } from 'react-router-dom'
import css from './navMenu.module.css'
 
const NavMenu = () => {
  return (
    <div className={css.navigation_container}>
      <nav className="navigation">
        <NavLink to="/">
          <button className={css.homeBtn}>Home</button>
        </NavLink>
        <NavLink to="/movies">
          <button className={css.homeBtn}>Movies</button>
        </NavLink>
      </nav>
    </div>
    )
};
    
export default NavMenu