import React from "react";
import "../Styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='footer-by'><p>Creado por: Nahuel Gonzalez Lopez</p></div>
      <div className='footer-logo-and-icons'>
        <img className='footer-logo' src="/images/DH.png" alt="" width={200}/>
        <div>
          <a href="/#"><img className='footer-icons' src="/images/ico-facebook.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-instagram.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="" /></a>
          <a href="/#"><img className='footer-icons' src="/images/ico-tiktok.png" alt="" /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

