import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

import Details from "../Components/Home/Details"

function Doctor(){
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <h1>
                Mas Detalles:
            </h1>
            <Details />
        </section>
    )
}

export default Doctor