import cp2Icon from '../../assets/cp2Icon.png'
import VnWIcon from '../../assets/VnWIcon.png'
import s from './Home.module.scss'
export default function Home() {
    return (
        <main className={s.homeMain}>
            <h2>Felipe Maia Salgueiro</h2>
            <section className={s.curriculo}>
                <h3>Sobre mim!</h3>
                <article>
                    <img src={cp2Icon} alt="A imagem apresenta o logo do colégio Pedro II" />
                    <div>
                        <h4>Formado no Colégio Pedro II de São Cristovão</h4>
                        <p>Estudei no Colégio Pedro II durante os anos de 2019, 2020, 2021 e 2022 cursando desenvolvimento de sistemas e lá descobri meu gosto por fazer sites e programas.</p>
                    </div>
                </article>
                <article>
                    <img src={VnWIcon} alt="A Imagem apresenta o ícone do curso Vai Na Web" />
                    <div>
                        <h4>Aluno Vai na Web</h4>
                        <p>Estou atualmente cursando desenvolvimento full-stack através do curso ead do Vai na Web, o que tem me permitido desenvolver sites em React</p>
                    </div>
                </article>
            </section>
        </main>
    )
}