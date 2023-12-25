import React from 'react';
import "./about.css";
import aboutImg from "../../assets/WhatsApp Image 2023-12-16 at 16.26.0455.png";
import CV from "../../assets/CaickCV.pdf";
import Info from './Info';


const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre</h2>
        <span className="section__subtitle">Introdução</span>

        <div className="about__container container grid">
            <img src={aboutImg} alt='' className="about__img"/>

            <div className="about__data">
                <Info />
                <p className="missao">Visão </p>
                <p className="about__description">Nossa visão é conquistar o reconhecimento no segmento atuante, fidelizando nossos clientes e apresentando propostas que viabilizem e fortaleçam nossa parceria e que através destas novas oportunidades venham surgir na prestação de nossos serviços.
                </p>
                <p className="visao">Missão </p>
                <p className="about__description">Nossa missão é transportar sua carga com qualidade, rapidez e segurança surpreendendo as expectativas nos serviços prestados visando a satisfação de nossos clientes e desenvolvimento de nossos colaboradores em busca da melhoria contínua.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
