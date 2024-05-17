import React from 'react';
import styles from './Cardbook.module.css';
import { Link } from 'react-router-dom';
function Cardbook({ id, livro, autor, category, handlerRemove }) {
    const remove = () => {
        handlerRemove(id);
    };

    return (
        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p>Autor: </p> {autor}
            <p className={styles.category_text}>
                <span />
                Categoria: {category}
            </p>
            <div className={styles.book_card_actions}>
                <Link to={`/editar-livro/${id}`}>editar</Link>
                <button onClick={remove}>Excluir</button>
            </div>
        </div>
    );
}

export default Cardbook;
