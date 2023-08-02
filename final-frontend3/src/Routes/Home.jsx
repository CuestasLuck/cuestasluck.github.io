import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

import List from '../Components/Home/List'

function Home(){
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <h1>
                Nuestros Medicos Mas Destacados:
            </h1>
            <List/>
        </section>
    )
}

export default Home