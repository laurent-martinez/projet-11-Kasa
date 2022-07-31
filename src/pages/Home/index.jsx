import Banner from '../../components/Banner'
import Header from '../../components/Header'
import Cards from '../../components/Cards'
import Footer from '../../components/Footer'

const Home = () => {
   return (
      <>
         <div className="container">
            <Header />
            <Banner src="/img/banner1.png" />
            <Cards />
         </div>
         <Footer />
      </>
   )
}

export default Home