import Header from './components/Header/Header'
import Presentacion from './components/Presentacion/Presentacion'


import './App.css'
import Proyectos from './components/Proyectos/Proyectos'
import SobreMi from './components/SobreMi/SobreMi'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='main-div'>
        <Header />
        <Presentacion />
        <Proyectos />
        <SobreMi />
        <Footer />
      </div>
    </>
  )
}

export default App
