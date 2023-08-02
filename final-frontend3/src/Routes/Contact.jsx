import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'

import Form from "../Components/Contact/Form"

function Contact(){
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <h1>
                Dejanos tus datos para comunicarnos aqui:
            </h1>
            <Form />
        </section>
    )
}

export default Contact