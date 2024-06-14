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
        await fetch('http://localhost:3000/livros', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': '*'
            },
        })
            .then((res) => res.json())
            .then((data) => setBooks(data.livros))
            .catch((error) => {
                console.log(error);
            });
    };

    async function removeBooks(id) {
        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                     'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': '*'
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
                    id={data.cod_livro}
                    autor={data.autor_livro}
                    livro={data.titulo_livro}
                    handlerRemove={removeBooks}
                />
            ))}
        </section>
    );
}

export default Livros;
