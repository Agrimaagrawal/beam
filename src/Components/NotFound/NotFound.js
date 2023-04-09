import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className='notfound-container'>
      <h1 className='notfound-header'>Oh no! This page either moved or doesn't exist. Try something else.</h1>
      <div className='notfound-blurb'>
        <p>P.S. - Hope you're doing well. 🤍</p>
        <p>P.P.S. - Proud of you.</p>
      </div>
    </section>
  );
}

export default NotFound;