import { useLocation } from 'react-router-dom';
import Message from '../../components/Message';
import styles from './Livros.module.css';
import Container from '../../components/Container/Container';
import Cardbook from '../../components/Cardbook/Cardbook';
import { useState, useEffect } from 'react';
function Livros() {
    const [books, setBooks] = useState([]);

    const [bookMessage, setBookMessage] = useState('');

    useEffect(() => {
        fetchDados();
    }, [books]);
    const fetchDados = async () => {
        await fetch('http://localhost:5000/books', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setBooks(data))
            .catch((error) => {
                console.log(error);
            });
    };

    async function removeBooks(id) {
        await fetch(`http://localhost:5000/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setBookMessage('livro excluido com sucessso');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const location = useLocation();
    let message = '';
    if (location.state) {
        message = location.state;
    }
    console.log(books);
    return (
        <section className={styles.livros_container}>
            <h1>Livros</h1>
            {message && <Message msg={message} type="success" />}

            {bookMessage && <Message msg={bookMessage} type="success" />}

            {books.map((data) => (
                <Cardbook
                    key={data.id}
                    id={data.id}
                    autor={data.nome_autor}
                    livro={data.nome_livro}
                    category={data.category.category}
                    handlerRemove={removeBooks}
                />
            ))}
        </section>
    );
}

export default Livros;
