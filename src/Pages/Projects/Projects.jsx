import webShopPreview from '../../assets/webShopHomePage.png'
import livrosVaiNaWebPreview from '../../assets/livrosVaiNaWebPage.png'
import s from './Projects.module.scss'
export default function Projects() {
    return (
        <main className={s.projectsMain}>
            <section className={s.listaProjetos}>
                <h2>Meus projetos!</h2>
                <article>
                    <h3>Webshop</h3>
                    <img src={webShopPreview} alt="A imagem apresenta um site, no cabeçalho do site tem um ícone de carrinho de supermercado e ao lado o texto Webshop, que é o nome do E-commerce, mais a direita tem 3 textos que dizem Home, Products e Log In. Abaixo do cabeçalho tem 3 caixas com imagens de produtos e nomes, avaliações e preços dos mesmos." />
                    <p>Estado: Em desenvolvimento</p>
                    <p>Descrição: O site de um E-commerce fictício, os produtos vem de uma API pública e o site lista os 3 produtos mais bem avaliados para o usuário na home page, lista todos os produtos da API na pagina Products e possui um formulário de logIn na pagina Log In. Futuramente irei criar uma pagina para caso o cliente clique em um produto, uma pagina para criar uma nova conta e uma atualização de responsividade para todas as paginas.</p>
                    <a target="_blank" href="https://github.com/FelipeSalgueiro/Webshop">Clique aqui para ver o repositório do projeto acima.</a>
                </article>
                <article>
                    <h3>Livros Vai na Web</h3>
                    <img src={livrosVaiNaWebPreview} alt="" />
                    <p>Estado: Completo</p>
                    <p>Descrição: O site Livros Vai na Web foi um desafio feito pelos instrutores aos alunos durante o curso, é um site que conscientiza sobre o hábito da leitura e também possui uma pagina de doação de livros e uma pagina para mostrar os livros que já foram doados. O site conta com responsividade para aparelhos de celular. Planejo voltar a mexer na estilização desse site no futuro, mas no momento o considero como um projeto completo.</p>
                    <a target="blank" href="https://github.com/FelipeSalgueiro/Livros-Vai-na-Web/tree/main/desafio3">Clique aqui para ver o repositório do projeto acima.</a>
                </article>
            </section>
        </main>
    )
}