import type { NextPage } from 'next'
import Header from '../src/components/Header/Header'
import HomeHead from '../src/components/HomeHead/HomeHead'
import Counter from '../src/components/Counter/Counter'
import Services from '../src/components/Services/Services'
import Portfolio from '../src/components/Portfolio/Portfolio'
import Process from '../src/components/Process/Process'
import Order from '../src/components/Order/Order'
import Solutions from '../src/components/Solutions/Solutions'
import Footer from '../src/components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HomeHead />
      <Counter />
      <Services />
      <Portfolio />
      <Process />
      <Order />
      <Solutions />
      <Footer />
    </div>
  )
}

export default Home
