import React, { useState, useEffect } from 'react';
import styles from './editarlivro.module.css';
import { useParams } from 'react-router-dom';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
export default function Editarlivro(params) {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [book, setBook] = useState({});

    useEffect(() => {
        fetchDados();
        loadCategories();
    }, []);
    const fetchDados = async () => {
        await fetch(`http://localhost:5000/books/${id}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => setBook(data))
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
            <form>
                <div>
                    <Input
                        type="text"
                        name="nome_livro"
                        id="nome_livro"
                        placeholder="digite o titulo do livro"
                        text="digite o titulo do livro"
                        value={book.nome_livro}
                        handlerOnChange={handlerChangeLivro}
                    />
                    <Input
                        type="text"
                        name="nome_autor"
                        id="nome_autor"
                        placeholder="digite o nome do autor"
                        text="digite o nome do autor"
                        value={book.nome_autor}
                        handlerOnChange={handlerChangeLivro}
                    />

                    <Input
                        type="text"
                        name="descricao"
                        id="descricao"
                        placeholder="digite a descricao"
                        text="digite a descricao"
                        value={book.nome_autor}
                        handlerOnChange={handlerChangeLivro}
                    />
                    <Select
                        name="categoria_id"
                        text="selecione a categoria do livro"
                        options={categories}
                        handlerOnChange={handlerChangeCategories}
                    />
                    <input type="submit" value="editar livro" />
                </div>
            </form>
        </div>
    );
}
