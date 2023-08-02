import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Details(){
    const params = useParams()
    const [doctors, setDoctors] = useState([])

    async function getDoctors() {
        const response = await (await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)).json()
        setDoctors(response)
    }

    useEffect(() => {
        getDoctors()
    }, [])

    return (
        <section>
            <h1>Mostrando los detalles de {doctors.name}</h1>
            <article>
                <p>User: {doctors.username}</p>
                <p>Phone: {doctors.phone}</p>
                <p>Website: {doctors.website}</p>
            </article>
            <Link to={"/"}>Volver a Inicio</Link>
        </section>
    )
}

export default Details