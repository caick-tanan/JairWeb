import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://api.whatsapp.com/send?phone=61995124774&text=Olá, gostaria de mais informações!" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="uil uil-whatsapp"></i>
        </a>
        
        <a href="mailto:caicktanam@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
        <i className="bx bxl-gmail"></i>
        </a>
    </div>
  )
}

export default Social
