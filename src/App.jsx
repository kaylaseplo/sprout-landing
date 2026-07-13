import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import Audience from './components/Audience'
import Trust from './components/Trust'
import Signup from './components/Signup'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Audience />
        <Trust />
        <Signup />
      </main>
      <Footer />
    </>
  )
}

export default App
