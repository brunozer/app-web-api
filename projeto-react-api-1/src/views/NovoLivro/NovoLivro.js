import styles from './Novolivro.module.css';
import Input from '../../components/Form/Input';
import Select from '../../components/Form/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function NovoLivro() {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [livro, setLivro] = useState({});
    useEffect(() => {
        fetchDados();
    }, [categories]);
    const fetchDados = async () => {
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
        setLivro({ ...livro, [e.target.name]: e.target.value });
    }
    function handlerChangeCategories(e) {
        setLivro({
            ...livro,
            category: {
                id: e.target.value,
                category: e.target.options[e.target.selectedIndex].text,
            },
        });
    }
    const criarLivro = async () => {
        await fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(livro),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate('/livros', { state: 'Livro salvo' });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    function formOnSubmit(e) {
        e.preventDefault();
        criarLivro(livro);
    }
    return (
        <>
            <section className={styles.novoLivro_container}>
                <h1>Página de cadastro de livro</h1>

                <form className={styles.form} onSubmit={formOnSubmit}>
                    <div>
                        <Input
                            type="text"
                            name="nome_livro"
                            id="nome_livro"
                            placeholder="digite o titulo do livro"
                            text="digite o titulo do livro"
                            handlerOnChange={handlerChangeLivro}
                        />
                        <Input
                            type="text"
                            name="nome_autor"
                            id="nome_autor"
                            placeholder="digite o nome do autor"
                            text="digite o nome do autor"
                            handlerOnChange={handlerChangeLivro}
                        />

                        <Input
                            type="text"
                            name="descricao"
                            id="descricao"
                            placeholder="digite a descricao"
                            text="digite a descricao"
                            handlerOnChange={handlerChangeLivro}
                        />
                        <Select
                            name="categoria_id"
                            text="selecione a categoria do livro"
                            options={categories}
                            handlerOnChange={handlerChangeCategories}
                        />
                        <input type="submit" value="cadastrar livro" />
                    </div>
                </form>
            </section>
        </>
    );
}

export default NovoLivro;
