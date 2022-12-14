import { Link } from 'react-router-dom'
import Header from '../../components/Header'
import './PageNotFound.scss'

const Error = () => {
   return (
      <div className="container">
         <Header />
         <div className="pageNotFound">
            <div className="pageNotFound_container">
               <h1 className="pageNotFound_container_title">404</h1>
               <h2 className="pageNotFound_container_subtitle">
                  Oups! La page que vous demandez n'existe pas.
               </h2>
            </div>

            <h3 className="pageNotFound_link">
               <Link to="/" className="pageNotFound_link_a">
                  Retourner sur la page d'accueil
               </Link>
            </h3>
         </div>
      </div>
   )
}

export default Error
