import Header from "../components/Header";
import { Link } from 'react-scroll';
import imgJoao1 from '../img/semprebomimg1.jpeg';
import imgJoao2 from '../img/semprebomimg2.jpeg';
import imgJoao3 from '../img/semprebomimg3.jpg';
import logo from '../img/Black Gold Minimalist Elegant Initials Logo.png';
import aguiaExperiencia from '../img/aguiaExperiencia.jpg';
import integridadeImg from '../img/integridadeImg.png';
import tecnicaImg from '../img/tecnicaImg.png';
import culturalImg from '../img/culturalImg.png';
import Card from '../components/Card';
import berteli from '../img/joaoMarcosImg.png';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Header />
            <section className="sectionHome" id="home" style={{ height: '100vh' }}>
                <h2 className="h2Home">A verdade nunca prejudica uma causa que é justa.</h2>
                <Link to="proposito" style={{ height: '100vh' }}>
                    <span className="material-symbols-outlined">
                        arrow_downward
                    </span>
                </Link>
            </section>

            <section id="proposito" className="propositoSection">
                <img className="imgProposito" src={imgJoao2} alt="João Semprebom" />
                <div className="textoProposito">
                    <h2>Propósito</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                </div>
            </section>

            <section id="inspiracao" className="inspiracaoSection">
                <div className="textoInspiracao">
                    <h1>O que nos Conduz?</h1>
                    <div className="iconsProposito">
                        <div>
                            <img src={integridadeImg} alt="Integridade" />
                            <p>em nossa atuação profissional. Isso abrange honestidade, clareza e independência.</p>
                        </div>
                        <div>
                            <img src={tecnicaImg} alt="Técnica" />
                            <p>conjugada a uma prática jurídica objetiva, que visa um resultado concreto. O processo não pode ser um fim em si mesmo e a compreensão do negócio do cliente é chave.</p>
                        </div>
                        <div>
                            <img src={culturalImg} alt="Cultural" />
                            <p>para encurtar as distâncias. Nossa experiência pessoal, acadêmica e profissional no exterior e nas diferentes regiões do Brasil como elemento de vantagem aos nossos clientes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pessoasContainer" id="pessoas">
                <Card imagem={imgJoao1} nome={"João Augusto Semprebom"} email={"jõaoaugusto@gmail.com"} />

            </section>

            <section className="experienciaContainer" id="experiencia" style={{ height: '100vh' }}>
                <h1 className="experienciaTitulo">EXPERIÊNCIA</h1>
                <div className="experienciaConteudo">
                    <img className="experienciaImagem" src={aguiaExperiencia} alt="aguia" />
                    <p className="experienciaTexto">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
                    </p>
                </div>
            </section>

            <section className="contatoContainer" id="contato">
                <img src={logo} alt="Logo" />
                <div className="infoContato">
                    <h3>+55 44 99999-9999</h3>
                    <h3>+55 44 3641-3641</h3>
                    <h3>
                        Rua Caminho 157, 13° andar<br />
                        Terra Boa Propósito, PR - Brasil<br />
                        CEP: 87240-000
                    </h3>
                </div>
            </section>


        </div>
    );
}

export default Home;
