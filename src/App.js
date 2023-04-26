

import React from 'react'
import AppRoutes from './routes/AppRoutes';
import Mynavbar from './components/MyNavbar/Mynavbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer/Footer';
import './App.css'


const App = () => {
  return (
    <>
      <Mynavbar>
        <Nav.Link href="/" ><span className="navbar-item">Inicio</span></Nav.Link>
        <Nav.Link href="/leer" ><span className="navbar-item">Leer</span></Nav.Link>
       {/* <Nav.Link href="/torneos" ><span className="navbar-item">Torneos</span></Nav.Link>*/}
       {/* <Nav.Link href="/top" ><span className="navbar-item">Top Players</span></Nav.Link>*/}
        
      </Mynavbar>
      <main className="main-section">
        <AppRoutes />
      </main>

      <Footer />
    </>


  )
}
export default App;
