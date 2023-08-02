import { Link } from 'react-router-dom'
import Home from '../Routes/Home'
import Favorites from '../Routes/Favorites'
import Contact from '../Routes/Contact'
import styles from './Header.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../Contexts/ThemeContext'



function Header(props) {
    const theme = useContext(ThemeContext)

    return (
        <section className={theme.value}>
            <header className={styles.header}>
                <h1 className={styles.title}>
                    <i>Doctors Company</i>
                </h1>
                <nav className={styles.navbar}>
                    <ul className={styles.menu}>
                        <li>
                            <Link to="/" element={<Home />} className={styles.links}>Home</Link>
                        </li>
                        <li>
                            <Link to="favs" element={<Favorites />} className={styles.links}>Favoritos</Link>
                        </li>
                        <li>
                            <Link to="contact" element={<Contact />} className={styles.links}>Contactanos</Link>
                        </li>
                    </ul>
                    <button className={styles.themeButton} onClick={()=>theme.changeTheme()}>Cambiar Tema</button>
                </nav>
            </header>
        </section>
    )
}
  
export default Header