import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home/Home';
import Livros from './views/Livros/Livros';
import NovoLivro from './views/NovoLivro/NovoLivro';
import Container from './components/Container/Container';
import Editarlivro from './views/EditarLivro/Editarlivro';
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Container>
                    <Routes>
                        <Route path="/" element={<Navbar />}>
                            <Route index element={<Home />} />
                            <Route path="/livros" element={<Livros />} />
                            <Route path="/novo-livro" element={<NovoLivro />} />
                            <Route
                                path="/editar-livro/:id"
                                element={<Editarlivro />}
                            />
                        </Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
