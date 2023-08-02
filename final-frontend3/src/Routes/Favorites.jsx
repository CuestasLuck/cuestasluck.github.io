import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

import FavoriteList from "../Components/Favorites/FavoriteList"

function Favorites(){
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <h1>
                Tu lista de Doctores Favoritos:
            </h1>
            <FavoriteList/>
        </section>
    )
}

export default Favorites