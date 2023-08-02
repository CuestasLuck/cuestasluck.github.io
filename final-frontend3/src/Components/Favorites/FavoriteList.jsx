import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

import styles from './Favorites.module.css'

const FavoriteList = () => {
    const [ favoriteDoctor, setFavoriteDoctor] = useState( JSON.parse(localStorage.getItem('favoriteDoctor') || '[]'))
    
    function delFavDoctor(delDoctor) {
        const deletedDoctor = favoriteDoctor.filter(
          doctor => doctor.id !== delDoctor.id
        )
        setFavoriteDoctor(deletedDoctor)
        localStorage.setItem('favoriteDoctor', JSON.stringify(deletedDoctor))
    }
    
    return(
        <>
            <div>
                {favoriteDoctor.length === 0 ? (
                    <h1>
                        Aun no has guardado a ningun doctor en tus favoritos
                    </h1>
                ) : null}

                <section>
                    <ul className={styles.cardSection}>
                        {favoriteDoctor.map(doctor => (
                            <FavoriteCard key={doctor.id} doctor={doctor} delDoctor={delFavDoctor}/>
                        ))}
                    </ul>
                </section>
            </div>   
        </>
    )
};
  
export default FavoriteList;