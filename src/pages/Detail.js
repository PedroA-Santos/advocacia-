import React from "react";
import { useParams } from "react-router-dom";
import imgJoao3 from '../img/semprebomimg3.jpg';
import berteli from '../img/joaoMarcosImg.png';
import { useNavigate } from "react-router-dom";
import './Detail.css';

const peopleData = [
    {
        nome: "João Augusto Semprebom",
        formacao: "Direito pela Centro Universitário Integrado 2019-2024",
        imagem: imgJoao3,
        desc: "Descrição detalhada de João Augusto Semprebom."
    },
    {
        nome: "João Marcos Lombardi Berteli",
        formacao: "Outra formação...",
        imagem: berteli,
        desc: "Descrição detalhada de João Marcos Lombardi Berteli."
    }
];

const Detail = () => {
  const navigate = useNavigate();
    const { nome } = useParams();

    const decodedNome = decodeURIComponent(nome);

    console.log("Nome", nome);

    const person = peopleData.find(p => p.nome === decodedNome);

    console.log("person",person);

    const returnHome = ()=>{
      navigate("/")
      window.scrollTo(0,0)
    }

    if (!person) {
        return <div>Pessoa não encontrada</div>;
    }

    return (
        <div className="detailContainer">
            <h1>{person.nome}</h1>
            <img src={person.imagem} alt={person.nome} />
            <h2>{person.formacao}</h2>
            <p>{person.desc}</p>

            <button onClick={returnHome}>Voltar</button>
        </div>
    );
};

export default Detail;
