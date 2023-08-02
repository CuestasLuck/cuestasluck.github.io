import { useContext, useState } from 'react'
import { GlobalContext } from "../../Contexts/GlobalContext";
import Card from './Card'
import styles from './Home.module.css'

const List = (props) => {
    const [ favoriteDoctor, setFavoriteDoctor] = useState( JSON.parse(localStorage.getItem('favoriteDoctor') || '[]'))
    
    const { doctors } = useContext(GlobalContext)

    function addFavDoctor(addDoctor) {
        if (!favoriteDoctor.some(favoriteDoctor => favoriteDoctor.id === addDoctor.id)) {
          const newDoctor = [...favoriteDoctor, addDoctor]
          setFavoriteDoctor(newDoctor)
          localStorage.setItem('favoriteDoctor', JSON.stringify(newDoctor))
        }
    }

    function delFavDoctor(delDoctor) {
        const deletedDoctor = favoriteDoctor.filter(
          doctor => doctor.id !== delDoctor.id
        )
        setFavoriteDoctor(deletedDoctor)
        localStorage.setItem('favoriteDoctor', JSON.stringify(deletedDoctor))
    }

    const isFavorite = doctor => {
        return favoriteDoctor.some(
            favoriteDoctor => favoriteDoctor.id === doctor.id
        )
    }

    const manageFavs = doctor => {
        if (isFavorite(doctor)) {
            delFavDoctor(doctor)
        } else {
            addFavDoctor(doctor)
        }
    }

    return (
        <section>
            <ul className={styles.cardSection}>
                {doctors.map(doctor => (
                    <Card key={doctor.id} doctor={doctor} manageFavs={manageFavs} isFavorite={isFavorite(doctor)}/>
                ))}
            </ul>
        </section>
    );
};
  
export default List;