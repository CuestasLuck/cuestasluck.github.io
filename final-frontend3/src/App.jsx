import { Routes, Route } from 'react-router-dom'

import GlobalContextProvider from './Contexts/GlobalContext'
import ThemeContextProvider from './Contexts/ThemeContext'

import Header from './Components/Header'
import Footer from './Components/Footer'

import Home from './Routes/Home'
import Favorites from './Routes/Favorites'
import Contact from './Routes/Contact'
import Doctor from './Routes/Doctor'

function App() {
  return (
    <>
      <ThemeContextProvider>
        <GlobalContextProvider>
          <Header />
              <main>
                <Routes>
                  <Route path='/' element ={<Home />}/>
                  <Route path='favs' element ={<Favorites />}/>
                  <Route path='contact' element ={<Contact />}/>
                  <Route path='/dentist/:id' element={<Doctor />} />
                </Routes>
              </main>
            <Footer />
        </GlobalContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App