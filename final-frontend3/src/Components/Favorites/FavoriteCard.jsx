import styles from './Favorites.module.css'

import { Link } from 'react-router-dom'

const FavoriteCard = (props) => {
    const { doctor, delDoctor } = props
    return (
        <li>
            <section className={styles.card}>
                <p>
                    <span className='titulo'>Nombre:</span> {doctor.name}
                </p>
                <p>
                    <span className='titulo'>User:</span> {doctor.username}
                </p>
                <hr></hr>
                <Link to={`/dentist/${doctor.id}`} className={styles.links}>Detalles</Link>
                <hr></hr>
                <button className={styles.favBtn} onClick={e => {
                    e.stopPropagation()
                    delDoctor(doctor)
                }}>Eliminar Doctor</button>
            </section>
        </li>
    )
};
  
export default FavoriteCard;