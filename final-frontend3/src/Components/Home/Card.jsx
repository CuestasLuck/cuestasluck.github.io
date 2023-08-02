import styles from './Home.module.css'

import { Link } from 'react-router-dom'

const Card = (props) => {
  const { doctor, isFavorite, manageFavs } = props

  return (
    <li>
      <section className={styles.card}>
        <p>
          <span className='titulo'>Nombre:</span> {doctor.name}
        </p>
        <hr></hr>
        <p>
          <span className='titulo'>User:</span> {doctor.username}
        </p>
        <hr></hr>
          <Link to={`/dentist/${doctor.id}`} className={styles.links}>Detalles</Link>
        <hr></hr>
        {isFavorite ? 
          (<button className={styles.favBtn} onClick={e => {
            e.stopPropagation()
            manageFavs(doctor)
          }}>Eliminar de Favoritos</button>) 
          : 
          (<button className={styles.favBtn} onClick={e => {
            e.stopPropagation()
            manageFavs(doctor)
          }}>Agregar a Favoritos</button>)
        }
      </section>
    </li>
  );
};

export default Card;
