import React from 'react';
import Form from '../Components/Form';
import '../Styles/contact.css';

const Contact = () => {
  return (
    <div className='contact vista'>
      <h2>¿Quieres saber más?</h2>
      <p>Envíanos tus preguntas y nos pondremos en contacto contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
