import React, { useState } from 'react';
import "./qualification.css";

function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section">
<<<<<<< HEAD
        <h2 className="section__title">Qualificação</h2>
        <span className="section__subtitle">Jornada Pessoal</span>
=======
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My personel journey</span>
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
    
        <div className="qualification__container container">
            <div className="qualification__tabs"> 
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
<<<<<<< HEAD
                    <i className="uil uil-graduation-cap qualification__icon"></i>Aprendizado
=======
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(2)}>
<<<<<<< HEAD
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experiência
=======
                    <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}
                >
                    <div className="qualification__data">
                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">Técnico em Mecatrônica</h3>
                            <span className="qualification__subtitle">COTIP - Colégio Tec. de Piracicaba</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2015 - 2017
=======
                            <h3 className="qualification__title">Web design</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
<<<<<<< HEAD
                             <h3 className="qualification__title">Sistemas de Informações</h3>
                            <span className="qualification__subtitle">UNIMEP - Universidade de Piracicaba</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2019
=======
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">Sistemas de Informações</h3>
                            <span className="qualification__subtitle">UDF - Centro Universitário do DF</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2022
=======
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">.NET | Angular</h3>
                            <span className="qualification__subtitle">Udemy/Youtube</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Presente
=======
                            <h3 className="qualification__title">Ux Expert</h3>
                            <span className="qualification__subtitle">Spain - Institute</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}
                >
                    <div className="qualification__data">
                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">BI & Suporte</h3>
                            <span className="qualification__subtitle">Aneel - Agência Nacional de Energia Elétrica</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2021
=======
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">Microsoft - Spain</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">Web Developer & Suporte</h3>
                            <span className="qualification__subtitle">MAPA - Ministério da Agricultura, Pecurária e Abastecimento</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2022
                            </div>
                        </div>
=======
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2020 - 2021
                            </div>
                        </div>

>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                    </div>

                    <div className="qualification__data">
                        <div>
<<<<<<< HEAD
                            <h3 className="qualification__title">Freelancer Mobile Developer</h3>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Presente
=======
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>

                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
<<<<<<< HEAD

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Freelancer Mobile Developer</h3>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2022 - Presente
                            </div>
                        </div>
                    </div>
=======
>>>>>>> 902cd67af0a10017be437eb9faaa1fc1f53d5ec0
                </div>
            </div>
        </div>

    </section>
  )
}

export default Qualification
