import styles from './Novolivro.module.css'
import Input from '../../components/Form/Input'
import Select from '../../components/Form/Select'
import { useEffect, useState } from 'react'
function NovoLivro() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchDados()
    }, [categories])
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
                console.log(error)
            })
    }
    console.log(categories)
    return (
        <>
            <section className={styles.novoLivro_container}>
                <h1>Página de cadastro de livro</h1>

                <form className={styles.form}>
                    <div>
                        <Input
                            type="text"
                            name="nome_livro"
                            id="nome_livro"
                            placeholder="digite o titulo do livro"
                            text="digite o titulo do livro"
                        />
                        <Input
                            type="text"
                            name="nome_autor"
                            id="nome_autor"
                            placeholder="digite o nome do autor"
                            text="digite o nome do autor"
                        />

                        <Input
                            type="text"
                            name="descricao"
                            id="descricao"
                            placeholder="digite a descricao"
                            text="digite a descricao"
                        />
                        <Select
                            name="categoria_id"
                            text="selecione a categoria do livro"
                            options={categories}
                        />
                        <input type="submit" value="cadastrar livro" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default NovoLivro
