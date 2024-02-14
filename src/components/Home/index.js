import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">App will be executed</h1>

        <p className="home-description">Roziroti,work</p>
        <button type="button" className="shop-now-button">
          book now
        </button>
      </div>
    </div>
  </>
)

export default Home
