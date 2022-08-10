import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
   return (
      <nav className="navigation">
         <Link to="/" className="navigation_link">
            Accueil
         </Link>
         <Link to="/about" className="navigation_link">
            A propos
         </Link>
      </nav>
   )
}

export default Navigation
