import styles from './Novolivro.module.css'
import Input from '../../components/Form/Input'
function NovoLivro() {
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

                        <input type="submit" value="cadastrar livro" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default NovoLivro
