import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './views/Home'
import Livros from './views/Livros'
import NovoLivro from './views/NovoLivro'
import Container from './components/Container/Container'
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
                        </Route>
                    </Routes>
                </Container>
            </BrowserRouter>
        </div>
    )
}

export default App