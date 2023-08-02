import { useState } from 'react'
import styles from './Form.module.css'

function Form(){
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [error, setError] = useState([])
    const [validation, setValidation] = useState(false)

    const addError = newError => {
        setError(prevErrors => [
          ...prevErrors, newError
        ])
    }

    function verifiedMail(email) {
        let caracters = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return caracters.test(email)
    }

    const formValidation = () => {
        let result = true
        setError([])


        if(name.trim().length < 5 && !verifiedMail(mail)){
            addError('El Nombre Debe Tener Como Minimo 5 Caracteres E Ingrese un Correo Electrónico Valido Por Favor')
            result = false
            return result
        }
        if (name.trim().length < 5) {
            addError('El Nombre Debe Tener Como Minimo 5 Caracteres ')
            result = false
        }if (!verifiedMail(mail)) {
            addError('Ingrese un Correo Electrónico Valido Por Favor ')
            result = false
        }
        else{
            return result
        }
        setValidation(result)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        if (formValidation()) {
            setValidation(true)
            setName('')
            setMail('')
        }
    }
    
    const settingName = e => {
        setName(e.target.value)
    }

    const settingMail = e => {
        setMail(e.target.value)
    }

    return (
        <section className={styles.container}>
            <section className={styles.formContainer}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label} htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' value={name} onChange={settingName} />
                    <label className={styles.label} htmlFor='mail'>Mail</label>
                    <input type='text' id='mail' value={mail} onChange={settingMail} />
                    <button className={styles.formBtn} type='submit'>Enviar</button>
                </form>
            </section>
            {validation && (<p>Gracias te contactaremos cuando antes vía mail</p>)}
            {error.length === 0 ? undefined : <p>{error}</p>}
        </section>
    )
}

export default Form