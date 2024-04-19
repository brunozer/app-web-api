import { useLocation } from 'react-router-dom';
import Message from '../../components/Message';
import styles from './Livros.module.css';
function Livros() {
    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state;
    }
    return (
        <section className={styles.livros_container}>
            <h1>Livros</h1>
            {message && <Message msg={message} type="error" />}
        </section>
    );
}

export default Livros;
