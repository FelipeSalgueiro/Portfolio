import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from '../../Pages/Home/Home.jsx'
import Projects from '../../Pages/Projects/Projects.jsx'
import Contact from '../../Pages/Contact/Contact.jsx'
import fotoTerno from '../../assets/fotoTerno.png'
import s from './Header.module.scss'
export default function Header() {
    return (
        <BrowserRouter>
            <header>
                <section className={s.apresentacao}>
                    <img src={fotoTerno} alt="A Imagem possui uma foto do autor da pagina." />
                    <div>
                        <h1>Felipe Maia Salgueiro</h1>
                        <h2>Dev Full-Stack</h2>
                    </div>
                </section>
                <nav className={s.navHeader}>
                    <ul>
                        <li><Link className={s.linkNavHeader} to='/'>Introdução</Link></li>
                        <li><Link className={s.linkNavHeader} to='/projects'>Projetos</Link></li>
                        <li><Link className={s.linkNavHeader} to='/contact'>Contato</Link></li>
                    </ul>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    )
}