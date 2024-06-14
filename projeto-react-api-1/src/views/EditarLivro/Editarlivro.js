import React, { useState, useEffect } from 'react';
import styles from './editarlivro.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
export default function Editarlivro(params) {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [book, setBook] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetchDados();
        loadCategories();
    }, []);
    const fetchDados = async () => {
        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*'
            },
        })
            .then((res) => res.json())
            .then((data) => setBook(data.livro))
            .catch((error) => {
                console.log(error);
            });
    };

    const editarLivro = async () => {
        await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-type': 'application/json',
                'Acess-Control-Allow-Origin': '*',
                'Acess-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(book),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/livros');
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const loadCategories = async () => {
        await fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setCategories(data))
            .catch((error) => {
                console.log(error);
            });
    };
    function handlerChangeLivro(e) {
        setBook({ ...book, [e.target.name]: e.target.value });
    }
    function handlerChangeCategories(e) {
        setBook({
            ...book,
            category: {
                id: e.target.value,
                category: e.target.options[e.target.selectedIndex].text,
            },
        });
    }
    return (
        <div className={styles.book_container}>
            <h1>Edição de livro</h1>
            <form onSubmit={editarLivro}>
                <div>
             
                    <Input
                        type="text"
                        name="titulo_livro"
                        id="titulo_livro"
                        placeholder="digite o titulo do livro"
                        text="digite o titulo do livro"
                        value={book.titulo_livro}
                        handlerOnChange={handlerChangeLivro}
                    />
                    <Input
                          type="text"
                          name="autor_livro"
                          id="autor_livro"
                          placeholder="digite o nome do autor"
                          text="digite o nome do autor"
                        value={book.autor_livro}
                        handlerOnChange={handlerChangeLivro}
                    />

                    <Input
                        type="text"
                        name="descricao"
                        id="descricao"
                        placeholder="digite a descricao"
                        text="digite a descricao"
                        value={book.descricao_livro}
                        handlerOnChange={handlerChangeLivro}
                    />
                    {/* <Select
                        name="categoria_id"
                        text="selecione a categoria do livro"
                        options={categories}
                        handlerOnChange={handlerChangeCategories}
                    /> */}
                    <input type="submit" value="editar livro" />
                </div>
            </form>
        </div>
    );
}
