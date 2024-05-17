import React from 'react';
import styles from './Home.module.css';
export default function Home() {
    return (
        <section className={styles.home_container}>
            <h1>
                Bem vindo ao Web-App <span>Libri</span>
            </h1>
            <p>COMECE A GERENCIAR SEUS LIVRO AGORA MESMO!</p>
        </section>
    );
}
