import React from 'react';
import styles from './Cardbook.module.css';
function Cardbook({ id, livro, autor, category }) {
    return (
        <div className={styles.book_card}>
            <h4>{livro}</h4>
            <p>Autor: </p>
            {autor}
            <p className={styles.category_text}>
                <span>Categoria: </span>
                {category}
            </p>
        </div>
    );
}

export default Cardbook;
