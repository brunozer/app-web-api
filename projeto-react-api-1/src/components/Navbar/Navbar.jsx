import { Outlet, Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Container from '../Container/Container'
function Navbar() {
    return (
        <>
            <Container>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/"> HOME </Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/livros">Livros</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/novo-livro">Cadastrar Livro</Link>
                    </li>
                </ul>
            </Container>
            <Outlet />
        </>
    )
}

export default Navbar
